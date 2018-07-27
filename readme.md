README.MD

git https - https://github.com/arselansoft/mywebsite01.git
git ssh - git@github.com:arselansoft/mywebsite01.git

my website for hobby"# mywebsite01" 

…or create a new repository on the command line
echo "# mywebsite01" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:arselansoft/mywebsite01.git
git push -u origin master

…or push an existing repository from the command line
git remote add origin git@github.com:arselansoft/mywebsite01.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.