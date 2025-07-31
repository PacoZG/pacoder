#!/usr/bin/env bash

taskDone () {
  echo -e "\033[01;32mDone!\033[0m\n"
}

# Define the animate function once at the top
animate() {
  local message=$1
  local i=0
  local dots=("..." " .." "  ." "   " ".  " ".. ")
  while [ $i -lt 6 ]; do
    printf "\r\x1b[5m\033[01;34m%s %s\033[00m" "$message" "${dots[$((i % ${#dots[@]}))]}"
    sleep 0.3
    ((i++))
  done
  printf "\r\x1b[5m\033[01;34m%s ...\033[00m\n" "$message"
}

if [ ! -d "./node_modules" ]; then
  animate "Installing dependencies"
  npm install
  printf "Dependencies installed \033[1;32mok\033[0m!\n"

else
  printf "\033[4m\033[01;36mDependencies are already installed\033[00m \n"
  printf "\033[01;33mReinstalling dependencies!\033[00m\n"
  printf "This process will remove node_modules folder and package-lock.json file, continue?\n"
  read -r -p "y (yes) / n (no): " reinstall

  if [ "$reinstall" == "y" ]; then
    animate "Removing node_modules"
    rm -R node_modules
    taskDone

    animate "Removing package-lock.json file"
    rm package-lock.json
    taskDone

    animate "Reinstalling dependencies"
    npm install
    taskDone

    printf "Dependencies have been reinstalled \033[1;32mok\033[0m!\n"
  fi
fi

printf "\033[4m\033[01;36mWould you like to check for outdated dependencies?\033[00m \n"
read -r -p "y (yes) / n (no): " answer
if [ "$answer" == "y" ]; then
  animate "Checking for outdated dependencies"
  output=$(npm outdated 2>&1)
  printf  "\033[1;33mOutdated dependencies:\033[0m\n"
  printf "%s\n" "$output"

  if printf "%s" "$output" | grep -q "Package"; then
    printf "\033[01;31mSome dependencies are outdated.\033[0m\n"
  else
    printf "\033[01;32mAll dependencies are up to date.\033[0m\n"
  fi
fi
