# ChinguDevGuide
A platform for new developers to find guides and communities to learn development.

# How to set up

    Fork this repository.

    afterwards clone your version of the repository to your local machine.

    git clone <your version of the repository>

    then add the upstream remote
    git remote add upstream https://github.com/ChinguDevGuide/ChinguDevGuide.git

    the above will make your version connected to the main version.

    now make a branch called 'dev' with the following command
    
    git checkout -b dev

    then update your version with the dev branch from the main repository by...

    git pull -rebase upstream dev  

    then also git push --set-upstream dev   --> this will make the new dev branch remote 

    Add or fix features once done git add and commit then push it to your remote repository

    once done go to your github page to make the pull request which you will be prompt with in your version of the repository.

    

    