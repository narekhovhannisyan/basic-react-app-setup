# Contributing to coinship-api

## Code Contributions

#### Step 1: Clone

Clone the project on [GitLab](https://gitlab.com/coinship/coinship-api.git)
   ``` bash
   $ git clone https://gitlab.com/coinship/coinship-api.git
   $ cd coinship-api
   ```
    
   Or clone using ssh
   ``` bash
   $ git clone git@gitlab.com:coinship/coinship-api.git
   $ cd coinship-api
   ```
   
For developing new features and bug fixes, the stage branch should be pulled and built upon.

#### Step 2: Branch

Create a new topic branch to contain your feature, change, or fix:

   ``` bash
   $ git checkout -b <topic-branch-name>
   ```

#### Step 3: Before Commit
Your code is unlikely be committed if linting is not applied or there is a broken test.
Thus make sure you run the following before the commit:
 - `npm run lint`
 - `npm run test-unit`

#### Step 4: Commit

Make sure git knows your name and email address:

   ``` bash
   $ git config --global user.name "Example User"
   $ git config --global user.email "user@example.com"
   ```
    
Add and commit:
    

   ``` bash
   $ git add my/changed/files
   $ git commit
   ```
    
Commit your changes in logical chunks. Please adhere to these [Commit message guidelines](#commit-message-guidelines)
   or your code is unlikely be merged into the main project.

#### Step 5: Rebase

Use git rebase to synchronize your work with the main repository.

   ``` bash
   $ git fetch upstream
   $ git rebase upstream/master
   ```
   
#### Step 6: Push

Push your topic branch:

   ``` bash
   $ git push origin <topic-branch-name>
   ```

#### Step 7: Pull Request

Open a Pull Request with a clear title and description.


## Commit message guidelines


The commit message should describe what changed and why.

   1. The first line should:
       * contain a short description of the change
       * be 60 characters or less
       * be prefixed with the name of the changed subsystem
       * be entirely in lowercase with the exception of proper nouns, acronyms, and the words that refer to code,
         like function/variable names
        
       Examples:
       
       ```
        lib: add changeTitle method to Project
        deps: add mime package to dependencies
        examples: fix typos in render-project.js
        helpers: refactor _setAreaImage in project.helper.js
       ```
   2. Keep the second line blank. 
          
   3. Wrap all other lines at 72 columns:
      * describe each line in logical chunks
      * start each line with: space hyphen space ( - ...)
      * be entirely in lowercase with the exception of proper nouns, acronyms, and the words that refer to code,
        like function/variable names
      
      Examples:
      
      ```    
        - add private function isMedia to check media type
        - remove deprecated logger from Project
        - refactor private function isAudio used
        - add JSDoc on isMedia function
      ```

   3. Also please refer the issue number which your commit closes or fixes:
      
      Example:
      
      ```
      root: init eslintrc file.

         - fixes #1 or closes #1
      ```    
    
## Pull request(merge) guidelines


Pull requets are the important part of the development process.
It's easy when everybody on board follows the main rules to make review process fast and easy. Keep it simple

   1. ***Make smaller pull requests***
      
      It's reasonable to open pull requests containing max **10** file changes.
   2. ***Write useful descriptions and titles***

      For example you can write what this pull request adds or solves(fixes).

   3. ***Have on-point commit messages***

      Commit messages not just messages. They must describe what they are going to do.

## Clean code guidelines


Every added functionality must have simple `JSDoc` style documentation.
For middleware style functions it's not neccessary to describe params, just what it does.

# To Be Continued...
