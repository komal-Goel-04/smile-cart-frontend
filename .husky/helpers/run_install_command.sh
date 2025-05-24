#!/bin/sh

run_install_command() {
  if [ "$SKIP_INSTALL_COMMAND" == "true" ]; then
      cat <<EOT
--------------------------------------------------------------------------------------
Environment variable SKIP_INSTALL_COMMAND is set to true.
You need to run yarn install manually, to install dependencies.
--------------------------------------------------------------------------------------
EOT
  else
    changed_files=$(git diff-tree --name-only --no-commit-id ORIG_HEAD HEAD)

    if echo "$changed_files" | grep -q "yarn.lock"; then
      echo "== Executing yarn install =="
      yarn install
    fi
  fi
}
