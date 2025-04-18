#!/bin/bash

ac="yes";
until [ $ac = "-" ]; do
    echo -e "";
    echo -e "+ : git:pull";
    echo -e "";
    echo -e "1 : pnpm:install";
    echo -e "2 : # pnpm:update";
    echo -e "3 : pnpm:outdated";
    echo -e "";
    echo -e "4 : svelte:check";
    echo -e "5 : vite:build";
    echo -e "";
    echo -e "7 : git:status";
    echo -e "8 : git:restore";
    echo -e "";
    echo -e "0 : clean";
    echo -e "";
    echo -e "* : test:unit";
    echo -e "";
    echo -e "n : ▼ nginx";
    echo -e "";
    echo -e "Type \c ";
    read  ac;
    case $ac in
        "+")
            echo -e "> git:pull";
            git pull;;

        "1")
            echo -e "> npm:install";
            npm install;;

        "2")
            echo -e "> # pnpm:update";;
            # pnpm update;;

        "3")
            echo -e "> # pnpm:outdated";;
            # pnpm outdated;;

        "4")
            echo -e "> svelte:check";
            npm run check;;

        "5")
            echo -e "> vite:build";
            npm run build;;

        "7")
            echo -e "> git:status";
            git status;;

        "8")
            echo -e "> git:restore";
            git restore .;;

        "0")
            echo -e "> clean";
            rm -rf .svelte-kit/{*,.*};
            rm -rf build/{*,.*};
            rm -rf node_modules/{*,.*};
            rm -f package-lock.json;
            rm -f pnpm-lock.yaml;;

        "*")
            echo -e "> test:unit";
            npm run vitest;;

        "n")
            acc="yes";
            until [[ $acc == "-" ]]; do
                echo -e "";
                echo -e "    1 : restart";
                echo -e "    2 : status";
                echo -e "";
                echo -e "    - : exit";
                echo -e "";
                echo -e "    Type \c ";
                read  acc;
                case $acc in
                    "1")
                        echo -e "> nginx restart";
                        sudo systemctl restart nginx.service;;
                    "2")
                        echo -e "> nginx status";
                        sudo systemctl status nginx.service;;
                esac
            done;;
    esac
done
echo -e "";
