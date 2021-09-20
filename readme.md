# javascript grammer
## Table of content
 ### 1. Presentation Format
  - #### Creative Communication
    - #### Theory
    - #### Color-Coded Diagrams
    - #### Source code
    - #### Code close ins
    
 ### 2. Chrome Console
  - #### Beyond Console Log
  - #### console.dir
  - #### console.error
  - #### console.time() and console.timeEnd() 
  - #### console.clear
  - #### console.log
  - #### console.count
  - #### console.info
    
 ### 3. Welcome To Javascript
  - #### Entry Point
     - #### DOMContentLoaded
     - #### readyState
     - #### Window.onload
     - #### Including External Scripts
     - #### Import and Export
     - #### Importing and Exporting Multiple Definition
     - #### Dynamic import
  - #### Strict Mode
  - #### Literal Values
  - #### Variables
  - #### Passing Values By Reference
  - #### Scope Quirks
    
  ### 4. Statements
   - #### Evaluating Statements
   - #### Expressions
        
  ### 5. Primitive Types
   - #### boolean
   - #### null
   - #### undefined
   - #### number
   - #### bigint
   - #### typeof
   - #### string
   - #### Template String
   - #### Symbol
   - #### Executing Methods On Primitive Types
  
  ### 6. Type Coercion Madness
   - #### Type Coercion in Constructors 
   - #### Type Coercion
   - #### Number and String Arithmetics 
   - #### Adding Multiple Values
   - #### Operator Precedence 
   - #### String To Number Comparison 
   - #### Other Comparison 
   - #### Operator Precedence & Associativity Table 
   - #### L- value and R- value 
   - #### null vs undefined   
   
  ### 7. Scope
   - #### Variable Definitions
   - #### Variable Types
   - #### Scope visibility Difference
   - #### const and array
   - #### const and Object Literals 
    
  ### 8. Operators
   - #### Arithmetic
   - #### Assignment
   - #### String
   - #### Comparison
   - #### Logical
   - #### Bitwise
   - #### Typeof
   - #### Ternary(?:)
   - #### delete
   - #### In

  ### 9. ...rest and ...spread
   - #### Rest Properties
   - #### Spread Properties
   - #### Destructuring assignment
   
  ### 10. Closure
   - #### Beautiful closure
   - #### Initialize closure
   - #### closing word
   - #### Arity
   - #### Currying
  ### 11. Loops
   - #### Types of loops in javascript
   - #### for loop
   - #### for...of loops
   - #### for...in loops
   - #### while loops

  ### 12. Arrays
   - #### Array.prototype.sort
   - #### Array.forEach
   - #### Array.every
   - #### Array.some
   - #### Array.filter
   - #### Array.map
   - #### Array.reduce
   - #### Array.flat
   - #### Array.flatMap
   - #### string.prototype.matchAll
   - #### Comparing Two Objects
   - #### Test Array
   - #### writing arrcmp
   - #### improveing objcmp
        
  ### 13. Function
   - #### Function Anatomy
   - #### Anonymous Function
   - #### Assigning Function to Variables
   - #### Function Parameters
   - #### Checking For Types
   - #### Safeguarding Funcion Parameters
   - #### Origin of this Keyword
        
  ### 14. Higher-order Function
   - #### Definition
   - #### Iterators
   - #### Calling our custom map Function
   - #### Calling Array.map Function
   - #### Array.prototype.filter
   - #### Array.prototype.reduce
   
  ### 15. Arrow Functions
   - #### return-less return
   - #### Arrow Function AS Events
   - #### Without Parantheses
   - #### Arrow Function Anatomy
   - #### Arguments
   - #### Returning From An Arrow Function
   - #### Similarities between ES-style Functions
   - #### No this binding
   - #### No Arguments Object
   - #### No Constructor
   - #### Inherired this Context

  ### 16. Creating HTML Elements Dynamically
   - #### Setting CSS Style 
   - #### Adding Elements To DOM with .appendChild Method
   - #### Writing a Function To Create Elements 
   - #### Creating Objects Using Function Constructor 
        
  ### 17. Prototype
   - #### Prototype On Object Literal
   - #### Prototype Link
   - #### Prototype Chain
   - #### Method Look-Up
   - #### Array Methods
   - #### Parenting
   - #### Extending Your Own Objects
   - #### Constructor Property
   - #### Function
   - #### Prototype In Practice
   - #### Object Literal
   - #### Using Function Constructor
   - #### Prototype
   - #### Creating Objects Using object.create
   - #### Back To The Future
   - #### Constructor Function
   - #### Along Came new Operator
   - #### The class Keyword

  ### 18. Object Oriented Programming
   - #### Polymorphism
   - #### Class Definitions
   - #### Inheritance
   - #### Inheritance in Prototype
        
  ### 19. Event
   - #### Browser Events
   - #### Synthetic Events
   - #### Event Anatomy
   - #### setTimeout
   - #### setInterval
   - #### Intercepting Browser Events
   - #### Display Mouse Position
   - #### Universal Mouse Event Class
   - #### Including and Using Mouse Class
   - #### Mouse class Explained
        
  ### 20. Network Requests 
   - #### Callback Hell
   - #### Promises
   - #### Promise.resolve
   - #### .then
   - #### .catch
   - #### .finally
   - #### Promise.reject
   - #### Putting It All Together
   - #### Promise.all
   - #### Promise Anatomy
   - #### Final Word
   - #### Axios
   - #### Fetch API
   - #### Fetch POST Payload
   - #### async/await 
      - #### await
      - #### async/await with try-catch
      - #### Final Word
   - #### Generator
      - #### yield 
      - #### Catching Errors 
        
  ### 21. Event Loop 
   - #### Simple Definition
        
  ### 22. Call Stack 
   - #### How does this apply to writing code 
   - #### Call Stack Example
   - #### Execution Context 
   - #### What is Execution Context 
   - #### Root Execution Context 
   - #### Execution Context in Code 
   - #### Window/Global Scope 
   - #### The Call Stack 
   - #### Call Stack & Execution Context Chain 
   - #### Call, .bind(), .apply() 
   - #### Stack Overflow
  
## 1. Presentation Format

JavaScript Grammar is not a complete JavaScript reference or manual. The subjects were reduced to only what’s important in modern-day JavaScript environment.

Namely: imports, classes, constructors, key principles behind functional programming, including many features ranging from ES5 - ES10 are covered in this book.

- ###  Creative Communication:

  Some of JavaScript is easy, some of it is difficult. Not everything can be explained by source code alone. Some things are based on intangible ideas or principles. 

  Throughout this tutorial book you will come across many creative communication devices, designed to make the learning process a bit easier and perhaps more fun. One example of that is color-coded diagrams.

- #### Theory:

  Not all subjects require extensive theory. On the other hand, some things won’t make any sense without it. Additional discussion will be included, where it becomes absolutely necessary, in order to fully understand a particular concept.

 - #### Color-Coded Diagrams:
    A significant amount of effort went into creating diagrams describing fundamental ideas behind JavaScript.

    They were designed for communicative value, hopefully  they will speed up the learning process in places where hard to grasp abstract ideas need to be explained visually.

    There are two types of diagrams in this book: abstract ideas and source code close ins.
- #### Source code:
    
    Source code listings will be provided to cement the foundational principles from preceding text.

    Example:
    ```javascript
    // Create (instantiate) a sparrow from class Bird 
    let sparrow = new Bird(“sparrow”,”gray”);
    sparrow.fly();
    sparrow.walk();
    sparrow.lay_egg();
    sparrow.talk();    //error,only parrot can talk
    ```

    This is an example of instantiating sparrow object from Bird class and using some of its methods.

- #### Code close ins:

  Most of the source code is accompanied by source code listings. 

  But when we need to close in on a particular important subject, a slightly larger diagram with source code and additional color-coded highlighting will be shown. 

  For example, here is exploration of an anonymous function when used in the context of a event callback function:

    ```javascript
    setTimeout(function() {
    console.log(“print  something  in  1 second”);
    }, 1000); 
    ```

## 2. Chrome Console

The console is useful for testing purposes.

  - #### Beyond Console Log
    The Console is a API. Most of the programmers only know the chrome console.log and it contains few  other methods that have practical use, especially when time is of essence. 

    1. [copy(obj) function](https://github.com/YuvarajMoorthi/JavaScriptGrammar/blob/2002a5ffc9d24a4281ebbf617df8679ae6ea9ad4/Chapter2/copy.js)

        Copying JSON representation of an existing object to your copy buffer.

        ```javascript
         let x={property:1,prop1:2,method:function(){}}
         copy(x);
        ```
  - ### [console.dir](https://github.com/YuvarajMoorthi/JavaScriptGrammar/blob/2002a5ffc9d24a4281ebbf617df8679ae6ea9ad4/Chapter2/console_dir.js)
    If you want to take a look at all object’s properties and methods, you can print it out directly into the console using console.dir method.
    
    ```javascript
    let x = { property: 1, prop1: 2, method: function(){}};
    console.dir(x);
    ```
   - ### [console.error](https://github.com/YuvarajMoorthi/JavaScriptGrammar/blob/2002a5ffc9d24a4281ebbf617df8679ae6ea9ad4/Chapter2/console_error.js)
     The console.error() method is used to display an error message on the console. The console.error() method is used for testing purpose. The error message is sent as a parameter to the console.error() method.

        ```javascript
        let fuel=99;
        function launch_rocket(){
            function warning_msg(){
            console.error("Not enough fuel.");
            }
            if(fuel>=100){
            //look like everything's ok
            }else
            warning_msg();
            }
        launch_rocket();
        ```
     The great thing about console.error is that it also provides the stack trace.
     output
     ```javascript
        Not enough fuel.
        warning_msg @ VM70:4
        launch_rocket @ VM70:9
        (anonymous) @ VM70:11
        ```


     **Stack trace:**

        The stack trace is a stable method to identify the error that comes into the program when the function of that program is called. It helps programmers to check where the particular error/exception comes and what is the reason behind it.

        Depending upon the time trace data is collected, the file size for these traces can be huge. We have to find a way to get a JavaScript stack trace when throwing an error/exception.

        The stack trace is a report of the active stack frames at a particular point in time during the execution of a program.
        
        Programmers commonly use stack tracing during interactive and debugging. 

   - ### [console.time() and console.timeEnd()](https://github.com/YuvarajMoorthi/JavaScriptGrammar/blob/2002a5ffc9d24a4281ebbf617df8679ae6ea9ad4/Chapter2/console_time%20and%20console_timeOut.js)
       This is used to  track the amount of time between function calls. This can be helpful when optimizing code.

       The console.time() method starts a timer in the console view.

       This method allows you to time certain operations in your code for testing purposes.

       Use the console.timeEnd() method to end the timer and display the result in the console.view.

       ```javascript 
        console.time();
        let arr=new Array(10000);
        for(let i=0;i<arr.length;i++){
             arr[i]=new Object();
        }
        console.timeEnd();
        ```
       console.output:
        ```
        default: 2.213134765625 ms
        ```
   - ### [console.clear](https://github.com/YuvarajMoorthi/JavaScriptGrammar/blob/2002a5ffc9d24a4281ebbf617df8679ae6ea9ad4/Chapter2/console_clear.js)
     The console.clear() method clears the console.

     The console.clear() method will also write a message in the console: "Console was cleared".
 
        ```javascript
         console.clear
        ```
   - ### [console.log](https://github.com/YuvarajMoorthi/JavaScriptGrammar/blob/2002a5ffc9d24a4281ebbf617df8679ae6ea9ad4/Chapter2/console_log.js)
     The console.log() method writes a message to the console for debugging.
        ```javascript
        let x = { property: 1, prop1: 2, method: function(){}};
        console.log(x);              //{property: 1, prop1: 2, method: ƒ}
        //printing object
        let obj={};
        console.log(obj);            //{}
        console.log("object="+obj);  //object=[object Object]
        console.log(`${obj}`);       //[object Object]
        ```
   - ### [console.counter](https://github.com/YuvarajMoorthi/JavaScriptGrammar/blob/2002a5ffc9d24a4281ebbf617df8679ae6ea9ad4/Chapter2/console_count.js) 
    
        Writes to the console the number of times that particular console.count() is called.

        You can add a label that will be included in the console view. By default the label "default" will be added.

        ```javascript
        console.count();       //default: 1
        console.count("a");    //a: 1  
        console.count("b");    //b:1
        console.count("a");    //a:2
        console.count("a");    //a:3
        console.count();       //default:2
        console.count();       //default:3
        console.count();       //default:4
        console.count("b");    //b:2
        //console.countReset
        console.countReset();  
        ``` 
   - ### [console.info](https://github.com/YuvarajMoorthi/JavaScriptGrammar/blob/2002a5ffc9d24a4281ebbf617df8679ae6ea9ad4/Chapter2/console_info.js)

        This method writes a message to the console.    

        ```javascript
          var car = "Dodge Charger";
          var someObject = { str: "Some text", id: 5 };
          console.info("My first car was a", car, ". The object is:", someObject);
        ```  

## 3. Welcome to Javascript
   - ### Entry point

      Every computer program has an entry point. 

       Writing  code directly into < script > tags.It will be executed instantly and simultaneously as the script is being downloaded into the browser, without concern for DOM or other media. 

      This can create a problem because  code might be accessing DOM elements before they are fully downloaded from the server. 

      To solve the situation, you may want to wait until the DOM tree is fully available.

      1. [DOMContentLoaded:](https://github.com/YuvarajMoorthi/JavaScriptGrammar/blob/2002a5ffc9d24a4281ebbf617df8679ae6ea9ad4/Chapter3/DOMContent_Loaded.html)
         
            The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

            You need to handle the DOMContentLoaded event when you place the JavaScript in the head of the page but referencing elements in the body.

            In this example, we reference the h1 tag in the Body from the   JavaScript in the head.

            Because the DOM has not been loaded when the JavaScript engine parses the JavaScript in the head, the h1 tag with the id mytitle does not exist.

            To fix the problem i’m using following method. 
            
            ```html
                <html>
                <head>
                <title>DOM Loaded</title>
                <script type="text/javascript">
                    function load(){
                    console.log("DOM Loaded");
                    }
                    document.addEventListener("DOMContentLoaded",load);
                </script>
                </head>
                <body>
                </body>
            </html>
            ```
            this give 100% guaranteed that all DOM elements have been successfully loaded into memory and trying to access them with JavaScript will not produce an error.

            **Also available:**

            1. load – not only HTML is loaded, but also all the external resources: images, styles etc.

            2. beforeunload/unload – the user is leaving the page.
          
           **Each event may be useful:**

            DOMContentLoaded event – DOM is ready, so the handler can lookup DOM nodes, initialize the interface.

            load event – external resources are loaded, so styles are applied, image sizes are known etc.

            beforeunload event – the user is leaving: we can check if the user saved the changes and ask them whether they really want to leave.

            unload – the user almost left, but we still can initiate some operations, such as sending out statistics.

        2. [readyState:](https://github.com/YuvarajMoorthi/JavaScriptGrammar/blob/2002a5ffc9d24a4281ebbf617df8679ae6ea9ad4/Chapter3/readyState.html)

            The readyState property returns the (loading) status of the current document.

            ```html
            <html>
                <head>
                <title>DOM Loaded</title>
                <script type="text/javascript">
                    function load(){
                    console.log("DOM Loaded");
                    }
                    if(document.readyState=="loading"){  // Loading hasn't finished yet
                        document.addEventListener("DOMContentLoaded",load);
                    }else{
                        load();   // `DOMContentLoaded` has already fire
                    }
                </script>
                </head>
                <body>
                </body>
            </html>
            ```
            The readyState of a document can be one of following:

            **loading**

            The Document is still loading.

            **interactive**

            The document has finished loading and the document has been parsed but sub-resources such as images, stylesheets and frames are still loading.

            **complete**

            The document and all sub-resources have finished loading. The state indicates that the load event is about to fire.


        3. [window.onload:](https://github.com/YuvarajMoorthi/JavaScriptGrammar/blob/2002a5ffc9d24a4281ebbf617df8679ae6ea9ad4/Chapter3/window_onload.html)

           With window.onload method, you can wait until all images and similar media have been fully downloaded.

           ```html
            <html>
                <head>
                  <title>Window Media Loaded</title>
                  <script type="text/javascript">
                    window.onload=function(){
                        /*DOM and media (image,embeds)*/
                        console.log("DOM and Media (image,embeds)");
                    }
                  </script>
                </head>
                <body>
                </body>
            </html>
           ```
        4. [Including External Scripts:]()
         
           The Including External Scripts with help of script tag attribute src attach the script file to html.

           html code:

           ```html
           <html>
                <head>
                    <title>Inculde External Script</title>
                    <script src="script.js"></script>
                    <script type="text/javascript">
                    let result=myfunction();
                    console.log(variable);
                    console.log(result);
                    </script>
                </head>
                <body>
                </body>
           </html>
           ```
           javascript code:

           ```javascript
           let variable=1;
           function myfunction(){
                return 2;
            }
            ```
        5. Import and export:
         
           The ES6 have import and export. Using import (and export) keyword to import variables, functions and classes from an external file.

           In order to make a variable, object or a function available for export, the export keyword must be prepended to its definition.

           In order to export the script.js class and start using it in the application, we must make sure the script tag’s type attribute is changed to ”module” (this is required).

           html code:

           ```html
            <html>
                <head>
                    <title>Import module</title>
                    <script type="module">
                        import{exporting}from "./script.js";
                        exporting();
                    </script>
                </head>
                <body>
                </body>
            </html>
            ```
            javascript code:

            ```javascript
            export function exporting(){
            console.log("import and export successfully");
            }
            ```
           Note: Access to script at 'file:///C:/Users/yuvarajsk/Desktop/Chapter3/Import%20and%20Export/script.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.
           
       6. Importing And Exporting Multiple Definitions:
           
           We’ve also imported  more than one function or class or variable using were imported together (separated by comma) from script.js file.

            html code:

           ```html
            <html>
                <head>
                    <title>Import module</title>
                    <script type="module">
                        import{exporting}from "./script.js";
                        import{add, sub, mul, divi}from "./export.js";
                        exporting();
                        add(2,5);
                        sub(10,2);
                        mul(2,5);
                        divi(10,2);
                    </script>
                </head>
                <body>
                </body>
            </html>
            ```
            javascript code:

            ```javascript
            function add(a,b){
                return a+b;
            }
            function sub(a,b){
                return a-b;
            }
            function mul(a,b){
                return a*b;
            }
            function divi(a,b){
                return a/b;
            }
            export { add, sub, mul, divi}
            ```

       7. Dynamic  import:   

           When importing statically significantly slows the loading of your code and there is a low likelihood that you will need the code you are importing, or you will not need it until a later time.

            When importing statically significantly increases your program's memory usage and there is a low likelihood that you will need the code you are importing.

            When the module you are importing does not exist at load time

            When the import specifier string needs to be constructed dynamically. (Static import only supports static specifiers.)

            When the module being imported has side effects, and you do not want those side effects unless some condition is true.

            Use dynamic import only when necessary. 

            ```javascript

            ```

   - ### Strict Mode:

        strict mode allows you to place your entire program, or an isolated scope, in a ”strict” operating context.

        This strict context prevents certain actions from being taken and throws an exception.

        It declare in globally.

        ```javascript
        'use strict';
        let x = 2;
        delete x;    // This will cause an error 
        ```

        **Benifits of using use strict:** 

        Strict mode makes several changes to normal JavaScript semantics.

        Strict mode eliminates some JavaScript silent errors by changing them to throw errors.

        Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.

        Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.

        It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).

        It disables features that are confusing or poorly thought out.

        Strict mode makes it easier to write “secure” JavaScript.

   - ### Literal Values :

        The literal representation of a number can be the digit 1, 25, 100 and so on. 

        A string literal can be "some text"; You can combine literals using operators (+,-,/,*, etc.) to produce a single result.

        The typeof(value) function can be used to determine type of the literal value.

        ```javascript
        console.log(5+7);    //literal value
        console.log("hello"+"world"); //adding two string
        console.log("username"+10);   //adding string with number
        console.log(Number(1)+Number(2)); //using Number function 
        console.log(new Number(1)+new Number(2));  //using Number object constructor
        console.log(new Number(1)+Number(2)+3);   //combination
        ```

   - ### Variables:
       
        Variables are containers for storing data (values). Keywords for defining variables include: var, let and const.

        All JavaScript variables must be identified with unique names.
        These unique names are called identifiers.

        Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

        ```javascript
        var legacy=1;                    // using legacy var keyword
        let number=1;                    //assign a number
        let string="hello.";             //assign a string
        let array=[];                    //assign an array literal
        let object={};                   //assign an object literal
        let json={"a":1};                //assign json1(object)
        let json2='{"a":1}';             //assign json2(string)
        let boolean=true;                //assign boolean
        let inf=Infinity;                //assign infinity number
        let func=function(a){return a};  //assign a function
        let arrow=(a)=>{a};              //assign arrow function
        let fp=a=>a;                     //assign arrow expression
        let n=new Number(1);             //assign number object
        let o=new Object();              //assign blank object
        ```

        The general rules for constructing names for variables (unique identifiers) are:

        •	Names can contain letters, digits, underscores, and dollar signs.

        •	Names must begin with a letter

        •	Names can also begin with $ and _ .

        •	Names are case sensitive (y and Y are different variables)

        •	Reserved words (like JavaScript keywords) cannot be used as names

   - ### Passing Values By Reference:
      
        Copying data from place to place is a common operation in computing.

        It is natural to think that when we assign a value to a variable from another variable, a copy is made. 

        But JavaScript assigns values by reference without actually making a copy of the original value.

        ```javascript
        let x={p:1};
        let y=x;
        x.p=2;
        console.log(y.p);    //2
        ```
        Here we created variable x and assigned object literal {p: 1} to it. 

        This means that from now on the value of x.p will be equal 1. 
        A new variable called y was created and assigned x to it.

        Now x has become a reference to y, not a copy. 

        From now on, any changes made to x will be also reflected in y. 

        This is why when we changed value of x.p to 2, y.p was also changed. 

        You can say that now y ”points” to the original object assigned to x variable.

        Only one copy of {p: 1} existed in computer memory all along from start to finish of this code block.

        Another example:

        ```javascript
        let a={p:1};
        let b=a;
        let c=b;
        let d=c;
        console.log(d.p);     //1
        a.p=10;
        console.log(d.p);     //10
        console.log(d);       //{p:10}
        ```
        This  Passing Values By Reference is only work object not in array and normally assign a variable.
        
        ```javascript
        let a=1;
        let b=a;
        let c=b;
        let d=c;
        console.log(a);   //1
        console.log(d);   //1
        a=10;
        console.log(a);   //10
        console.log(d);   //1
        ```

   - ### Scope Quirks:

        JavaScript has two known quirks when it comes to scope rules, that you might want to know about to save debugging time later.

        1. Quirk 1 – let and const inside function vs. global variable
         
           A variable defined using let or const keywords inside a function cannot coexist with global variable of the same name.

           ```javascript
           let a="global a";
           let b="global b";
           function x(){
            console.log("x():golbal b="+b);   //x():golbal b=global b
            console.log("x():golbal a="+a);   //ReferenceError: Cannot access 'a' before initialization
            let a=1;    
           }
            x();
            ```
            The `let` keyword doesn’t hoist definitions, and we have a global variable a, so logically, inside `function x()` variable a should be taken from global scope, before it is defined later with `let a = 1` but that’s not what happens.

            If variable a already exists inside a `function` (and it’s defined using let or const keywords) then using a, prior its definition within the `function` will produce ReferenceError, even if global variable a exists.

       2. Quirk 2 – `var` latches onto `window/this` object, `let` and `const` don’t

            In global scope `this` reference points to instance of window object / global context. 

            When variables are defined using `var` keyword they become attached to window object, but variables defined using `let` (and `const`) are not.

           ```javascript
            console.log(this === window);
            var a="a";
            let b="b";
            console.log(a);
            console.log(this.a);
            console.log(window.a);
            console.log(b);
            console.log(this.b);
            console.log(window.b);
            ```
## 4.Statements            
  - ### Evaluating statements

     A statement is the smallest building block of a computer program. The statements are executed, one by one, in the same order as they are written.

     A statement is an instruction to perform a specific action. Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc.

     JavaScript statements are composed of:  Values, Operators, Expressions, Keywords, and Comments.

     Semicolons separate JavaScript statements.

     Example:

    ```javascript
        let x,y,z;
        x=10;
        y=10;
        z=x+y;
    ```
    When separated by semicolons, multiple statements on one line are allowed:

    ```javascript
        let x,y,z; x=10; y=10; z=x+y;
    ```

    Statements usually produce a value. But when there isn’t anything to return, a statements will evaluate to undefined, which can be interpreted as ”no value.”

    ```javascript
        let x=10,y,z;
        x;   //10
        y;   //undefined
        y=20;
        y;   //10
        z=x+y;
        console.log(z);  //30
        if(y>=0){
            x=y;
        }else{
            x=-y;
        }
    ```
- ### Expressions:

   Any unit of code that can be evaluated to produce a value is an expression.

   **Arithmetic Expressions:**
    ```javascript
     10+13;  //23
    ```
    **String Expressions:**
    ```javascript
     “hello”+”world”;    //helloworld
    ```
    **Logical Expressions:**
    ```javascript
     10>20;
      true;
      a===b&&b===c;
    ```

## 5.Primitive Types

  JavaScript has 7 primitive types: null, undefined, number, bigint, string, boolean and symbol. Primitives helps us work with simple values such as strings, numbers and booleans.

1. Null- represents null i.e. no value at all
2. Undefined- represents undefined value
3. Number-represents numeric value e.g,100
4. String- represents sequence of characters e.g. "hello"
5. Boolean- represents boolean value either false or true
6. Bigint- represent integers in the arbitrary precision format. 
7. Symbol- referred to as a Symbol value.

  Some of the primitives have a constructor function associated with it.

  Numbers, strings and booleans are basic value units.

  You can write them out in literal form: a number can be 123 or 3.14.

   A string can be "string", or a template string: ‘I have {$number} apples.‘ (note the back-tick quotes, which allow you to embed variables into the string dynamically.) 

   A boolean can only be either true or false. You can combine primitive types using operators, pass them to functions or assign them as values to object properties.

  Number(), BigInt(), String() and Boolean() are primitive constructor functions.
  
```javascript
    let a= undefined;
    console.log(a,typeof a);    //undefined "undefined"
    let b= null;
    console.log(b,typeof b);    //null "object"
    let c=12;
    console.log(c,typeof c);    //12 "number"
    let d= 4.13;
    console.log(d,typeof d);    //4.13 "number"
    let e= 100n;
    console.log(e,typeof e);    //100n "bigint" 
    let f="hello";
    console.log(f,typeof f);    //hello string
    let g=Symbol();
    console.log(g,typeof g);    //Symbol() "symbol"
```
   - ### Boolean: 

      The boolean primitive can be assigned either true or false value.

   - ### Null:

        Running typeof operator on null will say it’s an ”object”.

        Some believe this is a bug in JavaScript because null is not an object since it doesn’t have a constructor. And they are probably right.

  - ### Undefined:

       Undefined is a type of its own. It’s not an object. Just a value JavaScript will use when you named a variable but don’t assign a value to it. Your hoisted variables will also be automatically assigned a value of undefined.

  - ### Number:

       You can define negative and positive values,  floating-point numbers. There is even a negative and positive Infinity value.

       NaN is technically a non-numeric value a statement can evaluate to. It’s available directly from the Number.NaN But literally, it is exactly what it says it is: neither "number" primitive nor Number() object. (It could be a "string".)

       ```javascript
       //the typeof operator returns value type in string format
        console.log(typeof -1);      //number
        console.log(typeof 7);       //number
        console.log(typeof 5);       //number
        //using Number constructor function to create a number
        let number=new Number(7);                   
        console.log(typeof number);                 //object
        console.log(typeof number.valueOf());       //number
       ```

  - ### Bigint:

       BigInt was added in EcmaScript10 .

       BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 253-1. The largest number that JavaScript can reliably represent with the Number primitive is 253-1, which is represented by the MAX_SAFE_INTEGER constant. This has various uses where operations on large numbers are required.

       ```javascript
       // Parameter in decimal format
        var bigNum = BigInt("123422222222222222222222222222222222222");
        console.log(bigNum);
            
        // Parameter in hexadecimal format
        var bigHex = BigInt("0x1ffffffeeeeeeeeef");
        console.log(bigHex);
            
        // Parameter in binary format
        var bigBin = BigInt("0b1010101001010101001111111111111111");
        console.log(bigBin);
        
        const limit = Number.MAX_SAFE_INTEGER;
        console.log(limit);
        limit+1;
        console.log(limit);

        const small=in;
        console.log(small);

        const larger=900719925474099in;
        console.log(larger);
       ```

   - ### Typeof:

        Typeof operator to find the data type of a JavaScript variable.

        ```javascript
        console.log(typeof -1);         //number
        console.log(typeof 10n);        //bigint
        console.log(typeof "hi");       //string
        ```

        In JavaScript there are 5 different data types that can contain values:

        •	string
        •	number
        •	boolean
        •	object
        •	function

        There are 6 types of objects:

        •	Object
        •	Date
        •	Array
        •	String
        •	Number
        •	Boolean

        And 2 data types that cannot contain values:

        •	null
        •	undefined

   - ### string:

        The string value is defined using any of the available quote characters: double quotes, single quotes, and back-tick quotes. You can nest double quotes inside single quotes.

        Running typeof on a string value returns "string".

        ```javascript
        var text1="hello";
        var text2="world";
        console.log(text1+text2);
        console.log(typeof "text");              //string
        console.log(typeof "text"+"book");       //string
        console.log(typeof "t"+20);              //string
        //using string constructor function to create a string
        let str=new String("hi.");                   
        console.log(typeof str);                 //object
        console.log(typeof str.valueOf());       //string
        ```

   - ### Template Strings:

       Strings defined using the backtick quotes have special function.

       You can use them to create Template Strings (also known as Template Literals) to embed dynamic variable values inside the string.

       ```javascript
        let firstName = "John";
        let lastName = "Doe";
        let text = `Welcome ${firstName}, ${lastName}!`;
        console.log(text);  //Welcome John, Doe!
       ```

      **Use of template string:**

        Template string provides new features to create a string that gives more control over dynamic strings.

        Also Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings".

   - ### Symbol:

        The JavaScript ES6 introduced a new primitive data type called symbol. Symbols are immutable (cannot be changed) and are unique.

        ```javascript
        // creating symbol
        const x = Symbol()
        typeof x; // symbol

        const x = Symbol('hey');
        console.log(x); // Symbol(hey)

        const x = Symbol('hey');
        console.log(x.description); // hey

        // two symbols with the same description
        const value1 = Symbol('hello');
        const value2 = Symbol('hello');
        console.log(value1 === value2); // false
        ```

       **Use of symbol:**

        Symbols are often used to identify object properties. Often to avoid name clashing between properties, since no symbol is equal to another. Or to add properties that the user cannot overwrite, intentionally or without realizing.

## 6.Type Coercion Madness  

 what will happen if we sporadically add up different types of values and stitch them together using the + operator?

 Example:
 ```javascript
 console.log(null+true+{}+[]+[5]);  //Null[object object]true5
 ```  
Output is in string format . After all, not a single value in this statement is a string! So how did that happen?

When + operator encounters objects of incompatible type, it will attempt to coerce those objects to their values in string format. 

In this case, leaving us with a new statement: `"null[object Object]" + true + [] + [5].`

when + operator encounters a string at least on one side of the operator, it will try to coerce the other side to string and perform string addition.

Calling `.toString` on true results in "true". Calling .toString on empty array brackets [] when the other side of operator is also a string evaluates it to "" which is why it appears missing from the result. And finally adding [5] to a string calls [5].toString which results in "5".

JavaScript will try to come up with best value available if you supply meaningless combinations of types to some of its operators.

After all, what would it mean to ”add” an object literal {} to an array []? Exactly – it doesn’t make any sense. But by evaluating to object [] at least we don’t break the code in that one little odd case where it may happen. 

This safety mechanism will prevent the program from breaking. In reality, however, these types of cases will almost never happen. We can treat majority of these cases as examples – not something you should be actually trying to do in code.

```javascript
let a=true+1;
let b=true+true;
let c=true+false;
let d="hello"+" "+"there";
let e="user"+1;
let f=1/"string";
let g= NaN===NaN;
let h=[1]+[2];
let i=Infinity;
let j=[]+[];
let k=[]+{};
console.log(a);   //2
console.log(b);   //2
console.log(c);   //1
console.log(d);   //hello there
console.log(e);   //user1
console.log(f);   //NaN
console.log(g);   //false
console.log(h);   //12
console.log(i);   //Infinity
console.log(j);   //"  "
console.log(k);   //[object Object]
```

   - ### Type Coercion In Constructors:
     Coercion also occurs when we provide an initialization value to a type constructor:

     ```javascript
        let a=Boolean(true);    //true
        let b=Boolean([]);      //true
        let c=Boolean({});      //true
     ```
     In the last two cases we supplied an array literal [] and an object literal {} to Boolean constructor.  the point is that at least it evaluates to true in this odd case.

     This is just a safety net to prevent bugs.

     ```javascript
          let d=Boolean(false);     //false
          let e=Boolean(NaN);       //false
          let f=Boolean(null);      //false
          let g=Boolean(undefined); //false
          let h=Boolean('');        //false
          let i=Boolean(0);         //false
          let j=Boolean(-0);        //false
     ```
     Meaningless values still evaluate to either true or false, because these are the only values available for boolean types.

   - ### Type Coercion:
 
       Coercion is the process of converting a value from one type into another. For example, number to string, object to string, string to number (if the entire string consists of numeric characters).

       But when values are used together with different operators not all cases are straightforward.

       the following logic might seem obscure:
        
        ```javascript
        []==[];      //false
        ```
        Let’s say that it is false because two instances of [] are not the same, because JavaScript == operator tests objects by reference and not by value.

        ```javascript
        let l=[];                 
        console.log(l==l); //true
        ```
        But this statement evaluates to true because variable a points to the same instance of the array literal. They refer to the same location in memory.
        
        JavaScript will often coerce different types of values to either strings or numbers. The Boolean type is no exception:
        
        ```javascript
        console.log(true+false);  //1
        ```

        The above statement is the same as 1 + 0.

        The unary plus and minus operators force the value to a number. If the value is not a number, NaN is generated:
         
        ```javascript 
        const s="text";
        console.log(-s);           //NaN
        ```    

        Here unary minus (-) struggles to convert the string "text" to a number. What does -"text" mean anyway? So it returns NaN because ”text” is not a number.

        when unary minus (-) is applied to a number, it produces expected value:

        ```javascript
        const m=1;
        console.log(-m);           //-1
        const n=1;
        console.log(n);            //1
        ```
        This rule is specific to the unary operator.

   - ### Number And String Arithmetics:

        Naturally the arithmetic + operator requires two values.

        ```javascript
         5+5;                       //10
        "5"+5;                      //55
         5+"5";                     //55
        "5"+"5";                    //55
        ```
   - ### Adding Multiple Values:

        ```javascript
         1+1+1+2+””;        //”3”
        ```
        First, all of the purely numeric values will be combined, ending up with the sum of 5 on the left hand side and "" on the right hand side:

        ```javascript
         “5”+””;                 //”5”
        ```
        Finally we arrive at "5" in string format.

   - ### Operator Precedence:

      When adding numbers and strings, numeric values always take precedence. This seems to be a trend in JavaScript. In the next example we we will compare numbers to strings using the equality operator. JavaScript chooses to convert strings to numbers first, instead of numbers to strings.

      Some operators take precedence over others. What this means is that multiplication will be evaluated before addition.

      example:
                  1+1+1*””;         //2

      The string "" will coerce to 0 and 1 * 0 will evaluate to 0.

      After multiplication, the numbers 1 + 1 will be added up to produce 2. Finally: 2 + 0 will evaluate to 2.

   - ### String To Number Comparison:  

        When it comes to equality operator == numeric strings are evaluated to numbers in the same way the Number(string) function evaluates to numbers.

        coercion between a string and a numeric value on both sides of the == operator can be visualized as follows.

        1. Comparing Numeric String To Number

             ```javascript
            1==”1”;      //true  
             ```

             Here ,”1” is also consider as 1. So the output is true.

      2. Comparing Non-Numeric String To Number

            ```javascript
            1==”a”;       //false
            ```

            Here ,”a” is consider as NaN. So the output is false.
        
   - ### Other Comparisons

        Other comparisons between different types (boolean to string, boolean to number)

        1. Boolean to  Non-Numeric String :
            ```javascript   
            true==”a”;         //false
            false==”a”        //false
            ```
        2. Boolean to Numeric String :

            ```javascript  
            true==”1”;         //true
            false==”1”        //false
            ```
        3. Boolean to number:

            ```javascript 
            true==1;         //true
            false==1;        //false
            ```
   - ### Operator Precedence & Associativity Table:
        ```javascript
        console.log(3 + 4 * 5); // 3 + 20
        // expected output: 23
        console.log(4 * 3 ** 2); // 4 * 9
        // expected output: 36
        let a;
        let b;
        console.log(a = b = 5);
        // expected output: 5
        ```

   - ### L-value and R-value:

       In many computer languages values on the left and right side of the operator are referred to as L-value and R-value. In EcmaScript spec they are often referred to as x and y values.

        1. Assignment Operator 

            The assignment operator takes the R-value and transfers it over to L-value, which is usually a variable identifier name.

                A=10;

        2. Arithmetic Addition Operator

            But the arithmetic addition operator takes the L-value and adds R-value to it:

                1+2   //3

   - ### null vs undefined:
    
       The null primitive is not an object .so it doesn’t have a built in constructor, like some of the other types.  we can use its literal value: null. 

        Think of null as a unique type for explicitly assigning a ”nothing” or ”empty” value to a variable. This way it doesn’t end up undefined.

        If you don’t assign a variable to null, its value will be undefined by default:
      
        ```javascript
        // define a variable ,without assigning a value
        let bike;
        console.log(bike);   //undefined
        ```

        To same effect, you can also explicitly assign variable to undefined

        ```javascript
         //Explicity assign undefined as default variable name
         let bike=undefined;
         console.log(bike);   //undefined
        ```
        But that’s something we should avoid. If the value is unknown at the time of variable definition it is always best to use null instead of undefined.

        The null keyword is used to assign a temporary default value to a variable before it’s populated with actual object data at a later time in your program.

        1. Initialize or Update 
        
            In a real-case scenario the null value can help us determine whether the data needs to be initialized for the first time, or existing data merely needs to be updated.


            ```javascript
            //Explicity assign null as default variable name
            bike=null;
            //class Definition
            class Motorcycle{
                constructor(make, model, year){
                    this.make=make;
                    this.model=model;
                    this.year=year;
                    this.features=null;
                }
                getFeatures(){
                    //Download features from database for the first time
                    if(this.features==null){
                        this.features={/*get features from database*/}
                    }else{
                        this.features={/*get features from database*/}
                    }

                }
                //instantiate new bike class
                bike=new Motorcycle("hero","XPulse200","2020");
                //get features from database
                bike.getFeatures();
            } 
            ```
            Here we assigned null to bike. Later at some point in code, the variable was instantiated with a real object. At no point in our program bike was undefined, even before it was initialized for the first time.

            Inside the object itself, the this.features property was also assigned to null. Maybe at a later time, we can download feature list from a database. Until then, we can be sure that feature object was not yet populated. 

            This gives us a distinction between two classic cases: downloading data for the first time  (if this.features == null) or updating existing data (that has already been downloaded at some point in the past.)

## 7.Scope 
   
   Scope determines the accessibility(visibility) of variables andit is simply the area enclosed by {} brackets. But be careful not to confuse it with the identical empty object-literal syntax.

   There are 3 unique scope types: The global scope, block scope and function scope.

   Event callback functions follow the same rules as function scope, they are just used in a slightly different context. Loops can also have their own block-scope.
    
  - ### Variable Definitions:

   1. Case-Sensitivity:

         Variables are case-sensitive. This means a and A are two different variables:

        Example:

       ```javascript
     	var a=1;
        var A=”hello”;
     	console.log(a);
        console.log(A);
       ```
   2. Definitions:

        Variables can be defined using var, let or const keywords.

        if you tried to refer to a variable that wasn’t defined anywhere, you would generate a ReferenceError error ”variable name is not defined”:

        example:

        ```javascript
        console.log(a);   //  ReferenceError error:a is not defined
        ``` 

        solve the this problem declare the variable

        ```javascript
        var  a=1;
        {
        console.log(a);    //1
        }
        ```

        Here apple is defined in global scope. But it can also be accessed from an inner block-scope. Anything (even a function definition) defined in global scope becomes available anywhere in your program. The value propagates into all inner scopes.

        When a variable is defined in global scope using var keyword, it also automatically becomes available in script file.

   3. Hoisting:

        Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

        A variable can be used before it has been declared.

        Hoisting is limited to variables defined using var keyword and function name defined using function keyword.

        Variables defined with let and const are hoisted to the top of the block, but not initialized.

        Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

        Using a let variable before it is declared will result in a ReferenceError.

        Example: let 

        ```javascrript
        y = 5;                        // Assign 5 to y                   
        console.log(y);         // ReferenceError: Cannot access 'y' before initialization
        let y;                         // Declare y
        ```

        Example:  const

        ```javascript
        z = 5;                             // Assign 5 to z
        console.log(z);           // SyntaxError: Missing initializer in const declaration
        const z;                       // Declare z
        ```

        Example:    var

        ```javascript
        x = 5;                         // Assign 5 to x                    
        console.log(x);       //5
        var x;                       // Declare x
        ```

        variables defined var keyword inside function-level scope are not hoisted. Commonly, when we talk about hoisting block-scope is implied.

        variables defined in global scope will propagate to pretty much every other scope defined in global context, including block-level scope, for-loop scope, function-level scope, and event callback functions created using setTimeout, setInterval or addEventListener functions.

        But what happens if we define a variable inside a block scope?

        Example:

        ```javascript
        console.log(apple);       //undefined
        {
        var apple=1;
        }
        ```

        Variable apple is hoisted to global scope. But the value of the hoisted variable is now undefined – not 1. Only its name definition was hoisted.

        Hoisting is like a safety feature. You should not rely on it when writing code. You may not retain the value of a hoisted variable in global scope, but you will still save your program from generating an error and halting execution flow..

        To avoid bugs, always declare all variables at the beginning of every scope. Also JavaScript only hoists declarations, not initializations.

        Example:

        ```javascript
        var x = 5;              // Initialize x
        console.log(x+" "+y);  //5 undefined
        var y = 7;              // Initialize y
        ```

        This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.

        Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.

      4.Function Name Hoisting:

        Hoisting also applies to function names. But variable hoisting always takes precedence.

        Example:

        ```javascript
        fun();                      //function1
        function fun(){
            console.log("function1");       
        }
        ```

        Note that the function was defined after it was called. This is legal in JavaScript. Just make sure you understand that it happened because of function name hoisting.

        Example:

        ```javascript
        function fun(){
                console.log("function1");
        }
        var   fun=function(){
                console.log("function2");
        }
        fun();                     //function2
        ```

        It is possible to assign an anonymous function expression to a variable name.

        It’s important to note, however, that anonymous functions that were assigned to variable names are not hoisted unlike named functions.

        This valid JavaScript code will not produce a function redefinition error. The function will be simply overwritten by second definition.

        In this case, variable name will take precedence over function definitions even if it was defined prior to the second function definition with the same name.

        Example2:
             You might think that the following code will produce a redefinition error:   this is still perfectly valid code – no error is generated.

        Code:

        ```javascript
        function fun(){
                console.log("function1");
        }
        function fun(){
                console.log("function2");
        }
        fun();               //function2
        ```

        Here, Whenever you have two function defined using function keyword and they happen to share the same name, the function that was defined last will take precedence.

        Finally, the order in which JavaScript hoists variables and functions. Functions are hoisted first. Then variables.

       5. Defining Variables Inside Function Scope:

         At this point you might want to know that variables defined inside a function will be limited only to the scope of that function. Trying to access them outside of the function will result in a reference error:

        Code:

        ```javascript
            fun();
            function fun(){
                var a=1;
            }
            console.log(a);           // ReferenceError: a is not defined
        ``` 
   - ### Variable Types:
    
        JavaScript is a dynamically-typed language.

        The type of the variable (defined using var or let keyword) can be assigned and changed at any time during the run-time of your application, after it was already compiled by browser’s JavaScript engine.

        The keywords var, let and const do not determine the variable’s type. Instead, they determine how the variable can be used: can it be used outside of the    scope in which defined? Can it be re-assigned to another value during run-time? For example, var and let can, but const can’t.

        **var:**

        The var statement is used to declare a variable in JavaScript. A variable declared with the var keyword is defined throughout the program.

        Example:

        ```javascript
        var greeter = "hey hi";  
        var times = 5;  
        if (times > 3) {  
            var greeter = "Say Hello everyone";   
        }  
        console.log(greeter)      //Output: Say Hello everyone 
        ```
        **let:**

        The let statement is used to declare a local variable in TypeScript. It is similar to the var keyword, but it has some restriction in scoping in comparison of the var keyword. The let keyword can enhance our code readability and decreases the chance of programming error. A variable declared with the let keyword is limited to the block-scoped only.

        In simple words,  let defines a variable but limits its use to the scope in which it was defined.

        Example:

       ```javascript
        let greeter = "hey hi";  
        let times = 5;  
        if (times > 3) {  
        let hello = "Say Hello everyone";   
        console.log(hello)     // Output: Say Hello everyone  
        }  
        console.log(hello)       // Compile error: greeter is not defined  
      ```
      **const:**

       const is the same as let but you can’t re-assign it to a new value once defined.
  
  - ### Scope Visibility Differences:

   1. No Difference In Global Scope

        When variables are defined in global scope there is no differences between var, let and const in terms of scope visibility.

        They all propagate into inner block-level, function-level and event callback scopes.

        Keywords let and const limit variable to the scope in which they were defined.

        Variables defined using let and const are not hoisted. Only var is hoisted

   2. In Function Scope:

        when it comes to functions, all variable types, including var also You cannot access variables outside of the function scope .

   3. Closures:

        A function closure is a function trapped inside another function.

        Calling plus() increments counter. This is not possible using other scope patterns
        
        Example:
        ```javascript
        var plus=(function(){
    	var count=0;  //defined only once
    	return function(){
        	count=count+1;
       	 return count;
    	}
        })();
        plus();             //1
        plus();            //2
        ```

        The plus() function is defined by an anonymous function that executes itself.

   4. In Classes:

        The class scope is simply a placeholder. Trying to define variables directly in class scope will produce an error.

        Example:

        ```javascript
        class Cat{
                let property=1;     //Unexpected identifier
            this.property=2;
        }
        ```
        Here are the proper places for defining local variables and properties. Note, in class methods, let (or var or const) only create a local variable to that scope. Therefore, it cannot be accessed outside of the method in which it was defined.

        ```javascript
     	class Cat{
    	constructor(){
          let property=1;
        	this.something=2;
    	}
    	method(){
        		console.log(this.property);     //undefined
       		 console.log(this.something);    //undefined
  	     }   
         }
        ```
   5. Const:

        The const keyword is distinct from let and var. 

        It requires assignment on definition:
        Example:
        ```javascript
        let a;
        console.log(a);      //undefined
        const b;                 //SyntaxError: Missing initializer in const declaration
        ```
        The above example show const requires initial value assignment.

        This makes sense because value of const cannot be reassigned.

        Example:
        ```javascript
        const value=1;
        Value=2;       //TypeError: Assignment to constant variable.
        ```
        
        It’s still possible to change values of a more complex data structure such as Array or objects, even if variable was defined using const.

       **const and Arrays:**

        Changing a value in the const array is still allowed:

        Example:
        ```javascript
        const array=[];
        array[0]="a";         //a
        array=[];               //TypeError: Assignment to constant variable.
        ```

        **const and Object Literals:**

        Similar to arrays, when it comes to object literals, const only makes the definition constant. But it doesn’t mean you can’t change values of the properties assigned to a variable that was defined with const:

        Example:
        ```javascript
        const a={prop:1};            //undefined
        console.log(a.prop);      //1
        a.prop=2;                          //2
        console.log(a.prop);       // 2
        a={some:1};                    //TypeError: Assignment to constant variable.
        ```

## 8.Operators
  
  - ### Arithmetic:

        Arithmetic operators are used to perform arithmetic on numbers.

        The modulus operator returns the number of times one number fits into the other. Here, 4 fits into 10 only 2 times – it is also often used to determine the remainder.
       ```javascript
        console.log(1+1);       //2
        console.log(2-1);       //1
        console.log(2*2);       //4
        console.log(10/5);      //2
        console.log(10%4);      //2
        //using variable in arithmetic 
        let a=10;
        console.log(a+2);        //12
        console.log(a-2);        //8
        console.log(a*2);        //20
        console.log(a/2);        //5
        console.log(a*a);        //100
        console.log(a**2);       //100
        console.log(a++);        //10
        console.log(a++);        //11
        console.log(a--);        //12
        console.log(a);          //11
       ```

   - ### Assignment:

        Assignment operators assign a value to a variable. There are several assignment operators that can also combine assignment with one of the arithmetic operations.

        ```javascript
        let a=10;
        console.log(a);           //10
        console.log(a+=2);        //12
        console.log(a-=2);        //10
        console.log(a*=2);        //20
        console.log(a/=2);        //10
        console.log(a%=2);        //0
        ```
   - ### String:

        Strings can be assigned to variable names or each other using the + operator which we earlier saw used as arithmetic addition. But when one or both of the values on either side of + operator are strings, it is treated as a string addition operator.

        ```javascript
        let a="a";
        console.log(a);              //a
        console.log(a+="b");         //ab
        console.log("x"+"y");        //xy
        console.log("x"+1);          //x1
        ```

        In this context the += operator can be thought of as string concatenation operator.

  - ### Comparison:

      Comparison operators are used in logical statements to determine equality or difference between variables or values.

      ```javascript
        //equality
        console.log(1==1);              //true
        console.log("1"==1);            //true
        console.log(1==2);              //false
        //equality of value and type 
        console.log("1"==="1");         //true
        console.log(1===1);             //true
        console.log(1==="1");           //false
        //inequality
        console.log(1!=1);              //false
        console.log(1!=2);              //true
        //inequality of value and type 
        console.log("1"!==1);           //true
        console.log(1!==1);             //false
        //greater than
        console.log(2>1);               //true
        //less than
        console.log(5<7);               //true
        //greater than or equal
        console.log(3>=1);              //true
        //less than or equal
        console.log(2<=7);              //true
        ```

   - ### Logical:

      Logical operators are used to determine the logic between variables or values.

       ```javascript
        //logical AND
        console.log(5<1&&3>2);              //false
        //logical OR
        console.log(10==10||20==20);        //true
        //logical OR
        console.log(!true);                 //false
        console.log(!(1==2));               //true
        ```
   - ### Bitwise:

        Bit operators work on 32 bits numbers.

        Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

        ```javascript
            //bitwise AND
            console.log(5&1);                       //1
            //bitwise or
            console.log(5|1);                       //5
            //bitwise XOR
            console.log(5^1);                       //4
            //bitwise NOT
            console.log(~5);                        //-6
            //bitwise Zero fill left shift
            console.log(5<<1);                      //10
            //bitwise Signed right shift
            console.log(5>>1);                      //2
            //bitwise Zero fill right shift
            console.log(5>>>1);                     //2
        ```

   - ### typeof:

        The `typeof` operator is used to check the type of a value.
       
        It will often evaluate to either primitive type, `object` or `function`. The value produced by the typeof operator is always string format:

       ```javascript
        console.log(typeof -1);         //number
        console.log(typeof 10n);        //bigint
        console.log(typeof "hi");       //string
        ```
   - ### Ternary (?:)

        The ternary operator has the form of: statement?statement:statement; Statements can be expressions or a single value:
        ```javascript
        let result = statement ? value : value ;
        ``` 
        example:
        ```javascript
        let result = (mark>=40) ? ‘pass’ : ‘fail’ ;
        console.log(result); 
        ```
        The ternary operator is like an inline if-statement. It does not support {} brackets or multiple statements.
   - ### Delete:

        The `delete` keyword can be used to `delete` an object property.

        ```javascript
        let bird={
            name:"raven",
            speed:"30mpg"
        };
        console.log(bird);     //{name: 'raven', speed:'30mpg'}
        delete bird.speed;
        console.log(bird);     //{name: 'raven'}
        ```
        You cannot use delete to remove stand-alone variables. Even though, if you try to do that, no error will be generated (unless you are in strict mode.)

   - ### In:

       The `in` operator can be used to check if a property name exists in an object:

       ```javascript
        //check if a property name exists in an object
        console.log("c" in {"a":1,"b":2,"c":3});      //true
        console.log(1 in {"a":1,"b":2,"c":3});        //false
       ```

        The in operator, when used together with arrays, will check if an index exists. Note, it is ignorant of actual value (in either arrays or objects.)

       ```javascript
        //check array if an index exists
        console.log("c" in ["a","b","c"]);             //false
        console.log(0 in ["a","b","c"]);               //true
        console.log(1 in ["a","b","c"]);               //true
        console.log(2 in ["a","b","c"]);               //true
        console.log(3 in ["a","b","c"]);               //false
        ```

        You can check for properties on built-in data types. The length property is native to all arrays:

        ```javascript
        //The length property is native to all arrays:
        console.log("length" in []);                    //true
        console.log("length" in [0,1,2]);               //true
        ```

        The ”length” property does not exist natively on an object unless it’s added explicitly:

        ```javascript
        //”length” property does not exist natively on an object unless it’s added explicitly:
        console.log("length" in {});                    //false
        console.log("length" in {"length":1});          //true
        ```

        Check for presence of constructor or prototype property on an object constructor function:

        ```javascript
        //Check for presence of constructor or prototype property on an object constructor function
        console.log("constructor" in Object);           //true 
        console.log("prototype" in Object);             //true
        ```

## 9. ...rest and ...spread   

  - ### Rest Properties:

      Rest property  improves the ability to handle parameters. The rest parameter allows us to represent an indefinite number of arguments as an array. By using the rest parameter, a function can be called with any number of arguments.

      The rest parameter is prefixed with three dots (...). Although the syntax of the rest parameter is similar to the spread operator, it is entirely opposite from the spread operator. The rest parameter has to be the last argument because it is used to collect all of the remaining elements into an array.

      Example:
    ```javascript
      function show(...args) {  
    	let sum = 0;  
  	  for (let i of args) {  
      	   sum += i;  
    	}  
  	 console.log("Sum = "+sum);           //60
      }  
     show(10, 20, 30);  
    ```
      All the arguments that we have passed in the function will map to the parameter list. As stated above, the rest parameter (...) should always be at last in the list of arguments. If we place it anywhere else, it will cause an error.
      ```javascript
        function show(a,...rest, b) {  
        // SyntaxError: Rest element must be last element
        };  
    ```
   - ### Spread Properties:

       which consists of three dots (...). It allows an iterable to expand in places where more than zero arguments are expected. It gives us the privilege to obtain the parameters from an array.

       Spread operator syntax is similar to the rest parameter, but it is entirely opposite of it.

      **Constructing array literal**

        When we construct an array using the literal form, the spread operator allows us to insert another array within an initialized array.

        Example:

        ```javascript
        let colors = ['Red', 'Yellow'];  
        let newColors = [...colors, 'Violet', 'Orange', 'Green']; 
        console.log(newColors);          //["Red", "Yellow", "Violet", "Orange", "Green"]
        ```

       **Concatenating arrays:**

        Spread operator can also be used to concatenate two or more arrays.

        Example:
        ```javascript
        let colors = ['Red', 'Yellow'];  
        let newColors = [...colors, 'Violet', 'Orange', 'Green'];  
        console.log(newColors);       // ["Red", "Yellow", "Violet", "Orange", "Green"]
        ```
      **Copying an array**

        We can also copy the instance of an array by using the spread operator.

        Example:
        ```javascript
        let colors = ['Red', 'Yellow'];  
        let newColors = [...colors];  
        console.log(newColors);           // ["Red", "Yellow"]
        ```

        **Clone Array Using Spread Operator**
        
        In JavaScript, objects are assigned by reference and not by values

        Example:
        ```javascript
        let arr1 = [ 1, 2, 3];
        let arr2 = arr1;
        console.log(arr1); // [1, 2, 3]
        console.log(arr2); // [1, 2, 3]
        // append an item to the array
        arr1.push(4);
        console.log(arr1); // [1, 2, 3, 4]
        console.log(arr2); // [1, 2, 3, 4]
        ```

       Here, both variables arr1 and arr2 are referring to the same array. Hence the change in one variable results in the change in both variables.

       However, if you want to copy arrays so that they do not refer to the same array, you can use the spread operator. This way, the change in one array is not reflected in the other. For example,

       ```javascript
        let arr1 = [ 1, 2, 3];
        // copy using spread syntax
        let arr2 = [...arr1];
        console.log(arr1); // [1, 2, 3]
        console.log(arr2); // [1, 2, 3]
        // append an item to the array
        arr1.push(4);
        console.log(arr1); // [1, 2, 3, 4]
        console.log(arr2); // [1, 2, 3]
        ```

     **Spread operator and Strings**

        Example:
        ```javascript
        let str = ['A', ...'EIO', 'U'];  
        console.log(str);          // ["A", "E", "I", "O", "U"]
        ```

        **Spread Operator with Object**

        Example:
        ```javascript
        const obj1 = { x : 1, y : 2 };
        const obj2 = { z : 3 };
        // add members obj1 and obj2  to obj3
        const obj3 = {...obj1, ...obj2};
        console.log(obj3); // {x: 1, y: 2, z: 3}
        ```

        **Using ...spread outside of arrays, objects or function parameters:** 

        You can’t use ...spread syntax to assign values to variables.

        Example:

        ```javascript
        let z=...[1,2,3];    // SyntaxError: Unexpected token '...'
        ```

 - ### Destructuring Assignment:

     Destructuring assignment can be used to extract multiple items from arrays and objects and assign them to variables.

    Example: 

    ```javascript
        //array destructuring
        var x, y;
        [x, y] = [10, 20];
        console.log(x);         // 10
        console.log(y);         // 20

        //array destructuring with rest
        [x, y, ...restof] = [10, 20, 30, 40, 50];
        console.log(x);       // 10
        console.log(y);       // 20
        console.log(restof);  // [30, 40, 50]

        // nested array elements
        const arrValue = ['one', ['two', 'three']];
        // nested destructuring assignment in arrays
        const [a, [b, c]] = arrValue;
        console.log(a);          // one
        console.log(b);          // two
        console.log(c);          // three

        // program to swap variables
        let p = 4;
        let q = 7;
        // swapping variables
        [p, q] = [q, p];
        console.log(p);             // 7
        console.log(q);             // 4
     ```
     ```javascript
        //object destructuring
        ({ x, y} = { x: 10, y: 20 });
        console.log(x); // 10
        console.log(y); // 20

        // extract directly from object’s inner properties
        let deep={
            basket:{
                fruit:{
                    name:"orange",
                    shape:"round",
                    weight:0.2
                }
            }
        };
        let {name ,shape,weight}=deep.basket.fruit;
        console.log(name);  	     //orange
        console.log(shape);      //round
        console.log(weight);     //0.2
    ```

     1. Merging objects with ...spread:

        Example:
        ```javascript
        let one={p:1,q:2,m:()=>{}};
        let two={r:3,s:4,n:()=>{}};
        let three={...one,...two}
        console.log(three);
        ```
        output:
        ```javascript
        {p: 1, q: 2, r: 3, s: 4, m: ƒ, …}
        m: ()=>{}
        n: ()=>{}
        p: 1
        q: 2
        r: 3
        s: 4
        [[Prototype]]: Object
        ```
        ```javascript
        // ...spread copies nested properties
        let first={nest:{nest:{eggs:10}}};
        let second={eggs:5};
        let third={...first,...second};
        console.log(third);            // {nest: {…}, eggs: 5}
        ```
     **Merging arrays with ...spread:**

      Example:

      ```javascript
        let one=[1,2];
        let two=[3,4];
        let three=[...one,...two];
        console.log(three);        //[1,2,3,4s]
      ```

## 10.Closure

   a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

   JavaScript variables can belong to the local or global scope.

   Global variables can be made local (private) with closures.

   Example:
   ```javascript
    function mail(from,sub,msg){
        let message=sub+" : "+msg+" by "+from;
        let send=function(){ console.log(message); }
        send();
    }
    mail("worker","report","work completed",);       //report : work completed by worker
  ```
   - ### Beautiful Closure:

      It can be assumed that closures are used in Functional Programming for similar reasons to why private methods are used in Object Oriented Programming. They provide a method API to an object in the form of a function.

      What if we could advance this idea and create a closure that looked beautiful and returned several methods rather than just one?

      ```javascript
        let get=null;       //placeholder for global getter function
        function closure(){
            this.inc=0;
            get=()=>this.inc;       //getter
            function increase(){this.inc++;}
            function decrease(){this.inc--;}
            function set(v){this.inc=v;}
            function reset(){this.inc=0;}
            function del(){
                delete this.inc;    //becomes undefined
                this.inc=null;      //additionally reset it to null
                console.log("this.inc deleted");
            }
            function readd(){
                //if null or undefined
                if(!this.inc)
                this.inc="re-added";
            }
            //return all methods at once
            return [increase,decrease,set,reset,del,readd];
        }
      ```

       The del method will completely remove inc property from the object and readd will re-add the property back. For simplicity of the explanation there is no safeguarding against errors. But naturally, if the inc property was deleted, and an attempt to call any of the methods was detected, a reference error would be generated.

   - ### Initialize closure:
      ```javascript
      let f=closure();
     ```
     Variable f now points to an array of exposed methods. We can bring them into global scope by assigning them to unique function names:

     ```javascript
        let inc=f[0];
        let dec=f[1];
        let set=f[2];
        let res=f[3];
        let del=f[4];
        let add=f[5];
     ```

      We can now call them to modify the hidden inc property:

      ```javascript
        inc();          //1
        inc();          //2
        dec();          //1
        get();          //1
        set(7);         //7
        get();          //7
        res(0);         //0
        get();          //0
      ```

      Finally we can delete the property itself using del method:
      ```javascript
        //delete property
        del(0);         //null
        get();          //null
        ```

       Calling other functions at this point would produce a reference error, so let’s re-add the inc property back to the object:

       ```javascript
        //read property inc
        add();
        get();          //re add
        Reset the inc property to 0 and increment it by 1:
        res();	   //0
        inc();	  //1
        get();	  //1
       ```

   - ### Closing Words 
      Whenever a function is declared inside another function, a closure is created. When a function containing another function is called, a new execution context is created, holding a fresh copy of all local variables. You can create a reference to them in global scope, by linking to variable names defined in global scope, or returning the closure from the outer function using return keyword. 

      A closure enables you to keep a reference to all local function variables, in the state they were found after the function exited.

      Note: new Function() constructor does not create a closure, because objects created with new keyword also creates a stand-alone context.

   - ### Arity:

      Arity is the number of arguments a function takes. You can access function’s arity via Function.length property:
      
      Example:

      ```javascript
        //define a function with 3 parameters
        function f(a,b,c){}
        //get function arity
        let arity=f.length;
        console.log(arity);  //3
      ```

   - ### Currying:

        Currying is a pattern that immediately evaluates and returns another function expression.

        A curried function can be constructed by chaining closures by defining and immediately returning all inner functions at the same time.

        Example:

      ```javascript
        let planets=function(a){
            return function(b){
                return "Favorite planets are "+a+" and "+b;
            };
        };
        let favoritePlanets = planets("Jupiter");
        //Call the curried fnction with different arguments
        console.log(favoritePlanets("Earth"));    //Favorite planets are Jupiter and Earth
        console.log(favoritePlanets("Mars"));     //Favorite planets are Jupiter and Mars
        console.log(favoritePlanets("Saturn"));   //Favorite planets are Jupiter and Saturn
        //
        let planet=function(x){
            return function(y){ 
            return "Favorite planets are "+x+" and "+y;
            }
        }
        console.log(planet("earth")("Mars"));
      ```   

## 11. Loops

  Loops can execute a block of code a number of times. Loops are handy, if you want to run the same code over and over again, each time with a different value.

  - ### Types of loops in JavaScript:

     There are different ways to iterate in JavaScript. Starting from classic while and for- loops to leaning more toward functional programming style iterators: using array’s higher-order methods.

     Common iterators are for, for...of, for...in, while and Array.forEach. Some Array methods are assumed to be iterators: .values, .keys, .map, .every, .some, .filter, .reduce and a few others. They are called higher-order functions, because they take another function as an argument.

     1. Incrementing And Reducing:

         Loops are used for large list of objects and updating their properties. Loops can be used for filtering out objects and reducing the list to something more meaningful.

         They can also be used for reducing a set of values to a single value.

        Example:
        ```javascript
        let miles=[5,12,75,2,5];
        //add up all numbers using a for loop
        let a=0;
        for(let i=0;i<5;i++){
            a+=miles[i];
        }
        console.log(a);     //99
        ```

        implement using reducer function:

        The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

        **The reducer function takes four arguments:**

        Accumulator

        Current Value

        Current Index

        Source Array

        Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

        example:
        ```javascript
        //using reducer function
        let mile=[10,20,30,40];
        const result=(accumulator,currentValue)=>accumulator+currentValue;
        //10+20+30+40
        console.log(mile.reduce(result));       //100
        //50+10+20+30+40
        console.log(mile.reduce(result,50));      //150
        ```

       2. Generating HTML Elements Dynamically:

          Create a number of HTML elements dynamically to populate the UI view.

            Example:
            ```javascript
            /add 10 elements to the page
            for(let i=1;i<11;i++){
                //create new html element
                let element=document.createElement("div");
                //insert inner html into the element
                element.innerHTML="element"+i;
                //add the created element to the document
                document.body.appendChild(element);
            }
          ```  

       3. Render lists:

          Rendering refers to showing the output in the browser.
           In here the output displayed in list.

      4. Dynamically sorted tables

         Building an entire table dynamically can help you sort values by column using an Array.entries and Array.sort methods.

         In some cases you will have to write your own sorting function, if your table columns are stored in an object as properties and not array items. That however, may or may not be a good idea, depending on the data set.

         **Array.entries:**

         The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array. 

         Example:
         ```javascript
            var array1=["a","b","c"];
            var result=array1.entries();
            for(let i=0;i<array1.length;i++){
                console.log(result.next().value);        		//[0,"a"] [1,"b"] [2,"c"]
            }
         ```
         **Array.sort:**

         The sort() method sorts an array alphabetically.

          Sort() for numeric values using following methods:

         When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

         If the result is negative a is sorted before b.

         If the result is positive b is sorted before a.
            
          If the result is 0 no changes are done with the sort order of the two values.

            Example:

            ```javascript
            //sort the string array
            var fruits = ["Banana", "Orange", "Apple", "Mango"];
            fruits.sort();
            console.log(fruits);          //["Apple", "Banana", "Mango", "Orange"]

            //sort the numeric array
            var points=[2,5,3,56,1,7];
            //sort alphabetically
            points.sort();
            console.log(points);         //[1, 2, 3, 5, 56, 7]
            //sort numerically
            points.sort(function(x,y){return x-y});
            console.log(points);         //[1, 2, 3, 5, 7, 56] 
            ```     

  - ### for loops:

    For loop syntax comes in three syntactic type.
    ```javascript
    //for-loop with an empty body
    for(initialize;Condition;increment);
    //iterate over a single statement
    for(initialize;Condition;increment) single_statement;
    //iterate over a multiple statement
    for(initialize;Condition;increment) {
        multiple;
        statement;
    }
    ```

    Example:
    ```javascript
    //for-loop with an empty body
    for(let i=0;i<1;i++);   
    ```
    ```javascript      
    //iterate over a single statement
    for(let i=0;i<2;i++) console.log("hi");    //hi
    ```
    ```javascript
    //iterate over a multiple statement
    for(let i=0;i<2;i++) {
        console.log("hello");
        console.log("world");            
    }
    ```
    output
    ```
     hello
     world
     hello
     world
    ```
     ```javascript
    //if use more than one statement in same line
    for(let i=0;i<2;i++) console.log("hello"); console.log("world");
    //output
    //hello
    //hello
    //world
    ```

     For loops require 3 statements separated by two semicolons, which can be any legal JavaScript statement, a function call, or even an empty statement.

     You’ll often use the following pattern in basic implementations: 1) initialize counter 2) test condition and 3) increment or decrement counter.

    1. 0-index based counter:

       Initializing the for-loop counter with a 0-index based value is a good idea, because most lists (like arrays) are 0-index based, where first item is located at array[0] and not array[1]. This might take some time to get used to.

    2. The Infinite for Loop:

        A for loop can be defined without any of the default statements. But by doing this you will create an infinite for-loop that will freeze your program:

        Example:
        ```javascript
         for(;;)
         console.log(“infinite loop”);     //infinite loop
        ```

         You probably don’t really want to do this, unless for some reason it becomes necessary. A while loop should probably be used in this case.

      3. Multiple Statements:

          Multiple statements can be separated by comma. In the following example the inc() function is used to increment value of global variable counter. Note the combination of the two statements: i++, inc():


            Example:
            ```javascript
            let counter=0;
            function inc()
            {
                counter++;
            }
            for(let i=0;i<10;i++,inc());
            console.log(counter);   //10
            ```
            This body-less for loop progresses the counter 10 times. The actual value is incremented inside the inc() function. This is just an example of executing multiple statements, we should definitely avoid using global variables in these types of cases.

      4. Incrementing Numbers

         At their basic, loops can be used to increment numbers.

            ```javascript
            let counter=0;
            for(let i=0;i<10;i++)
                counter++;
            counter;      //10
            ```
       5. for loops and let scope

           Bracket-less for-loop syntax is not good friends with the let keyword. The following code will generate an error:

            Example:

            ```javascript
            for (var i=0;i<10;i++) let x=i;    //SyntaxError: Lexical declaration cannot appear in a single-statement context
            for (var i=0;i<10;i++) {let x=i;}  //" "
            ```

       6. Nested for Loops

            Example:
            ```javascript
            for(let y=0;y<2;y++)
            for(let x=0;x<2;x++)
                console.log(x,y);
            ```   
            output:
            ```
            0 0
            1 0
            0 1
            1 1
            ```
       7. Loop’s Length

           The condition statement will usually check if counter has reached a limit and if so, the loop will terminate:

            Example:
            ```javascript
            for(let i=0;i<3;i++){
                let loop="loop";
                console.log(loop);      //loop loop loop
            };
            ```
       8. Skipping Steps:

            You can skip an iteration step by using continue 
            keyword;

            Example:
            ```javascript
            for(let i=0;i<3;i++){
                if(i==1)
                continue;
                console.log(i);   //0 2
            }
            ```
             The continue keyword tells code flow to go to the  next step without executing any next statements in this for-loop’s scope during the current iteration step.

      9. Breaking Early

            You can break out of a for loop by using break keyword:

            Example:
            ```javascript
            //break the for loop without condition
            for(let i=0;;i++){
                console.log("loop");       //loop
                break;             // for loop break here
            };
            ```

            Note the condition statement was skipped here. The loop will break by an explicit command from the statement itself.

            In this case the for loop will print ”loop.” to the console only once. The break keyword simply exits the loop whenever it’s encountered. But it can also be conditional (see next example.)

      10. Custom Breaking Condition

          None of the 3 statements separated by ;; in a for loop are required. It’s perfectly legal to move the conditional test into the for loop’s body, instead of testing for it between the parenthesis. 

          This example skips the middle statement, where we would usually create a conditional test for the counter, and replaces it by its own condition inside the loop where it breaks out of the loop if i is greater than 1:

            Example:
            ```javascript
            //custom breaking condition
            for(let i=0;;i++){
                console.log("loop , i="+i);       
                if(i>1)
                break;             // for loop break here
            };
            ```

            If not for the if statement inside the for loop, it would continue indefinitely because there are not other conditions stopping it from running.

            Output:
            ```
            loop , i=0
            loop , i=1
            loop , i=2
            ```
            The word ”loop.” is printed 3 times. The condition i is greater than 1 might deceive us into thinking that the text will be printed 2 times at most. But it’s  printed 3 times! That’s because counting started with 0 and not 1, and at its upper limit the condition evaluates to 2 and not 1.

       11. Breaking To Label

           In JavaScript, a statement can be labeled when a label name: is prepended to a statement. Because a for loop is a statement you can label for loops.

           Let’s try to increment value of c inside the inner loop. By choosing whether to break the loop and jump to inner or mark label we change the pattern in which the for loops will work: 

           This example produces 11 when breaking to mark: label
        
           Example:
           ```javascript
            //Breaking To Label
            //mark breaking
            let c=0;
            mark: for(let i=0;i<5;i++)
                inner:for(let j=0;j<5;j++){
                    c++;
                    if(i==2)
                    break mark;
                }
            console.log(c);       //11
            ```

           2.This example produces 21 when breaking to inner: label.

           ```javascript
            //inner breaking
            let d=0;
            mark: for(let i=0;i<5;i++)
                inner:for(let j=0;j<5;j++){
                    d++;
                    if(i==2)
                    break inner;
                }
            console.log(d);       //21
           ```

           The two examples are logically different based on which label the execution flow of the inner for loop is transferred to.

       12.  Breaking from a labeled block scope:

             While we’re on the subject, you can use break keyword to break out of regular non for-loop block scope as long as it’s labeled:

              Example:

              ```javascript
                //Breaking from a labeled block scope:
                block:{
                    console.log("before");     //console print "before"
                    break block;               //break the block
                    console.log("after");      //Execution flow never reaches ”after”
                }
              ```
              Execution flow never reaches ”after”.

   - ### for...of Loop

        The JavaScript for of statement loops through the values of an iterable object.

        It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.

        We’ll start with a slightly advanced example where we will use a for...of loop together with a generator, and then discover some of the other, simpler use-cases.

       1. for...of and Generators

          Sometimes you might want to use a for loop with a generator – a special type of function with star * character appended to the function* keyword. 

          When a generator function is called, the multiple yield statements inside it do not execute at the same time, as you would normally expect. Only the first one does. 

          To execute yield statements 2 and 3, you have to call the generator function again (two more times). Internally, the yield statement counter is incremented automatically every time you call the generator function.

          Generator executes a yield statement asynchronously, even though the code inside the generator function has linear appearance. This is done on purpose - it makes code more readable compared to alternatives (XMLHttpRequest, Ajax, etc).

           Example:
            ```javascript
            //generator function:
            function* generator(){
                yield 1;
                yield 2;
                yield 3;
            }
            for(let value of generator())
            console.log(value);       // 1 2 3
            ```

             The code above is equivalent to calling generator manually 3 times.

     2. for...of and Strings

          Strings are iterable. 

          You can walk each character of a string using a for...of loop:

         example:
         ```javascript
          string="text";
          for(let value of string)
              console.log(value);     // 't' 'e' 'x' 't'
         ```   

     3. for...of and Arrays

         We can iterate through it without having to create index variables. Once the end of the array is reached the loop will end automatically:

         Example:
         ```javascript
            let array=[0,1,2,"hello"];
            for(let value of array)
            console.log(value);   // 0 1 2 "hello"
          ```

      4. for...of and Objects

          example:
          ```javascript
            let object={a:1,b:2,c:3};
            for(let value of object)  //TypeError: object is not iterable
                console.log(value);
          ```

           But for...of loops work only with iterable values. An object is not an iterable. (It has enumerable properties.) One solution is to convert the object to an iterable first before using it in a for...of loop.

      5. for...of loops and objects converted to iterables

          As a remedy you can first convert an object to an iterable using some of the built-in Object methods: .keys, .values or .entries:

            Example:
           ```javascript 
            //for...of loops and objects converted to iterables
            let enumerable={property:1,method:()=>{}};
            //print key here
            for(let key of Object.keys(enumerable))
                console.log(key);       //property  method
            //print value here
            for(let value of Object.values(enumerable))
                console.log(value);     //1  ()=>{}
            //print the entries
            for(let entry of Object.entries(enumerable))
                console.log(entry);      // ["property",1]    ["method",f]
          ```

            This can also be achievable by using a for...in loop instead, without having to use any of the Object conversion methods.

 - ### for...in Loops:

      this  loops through the properties of an object

      The `for...of` loops (in previous section) only accept iterables. Unless the object is first converted to an iterable, a `for...of` loop won’t be of any help.

      `for...in` loops work with enumerable object properties. It’s a much more elegant solution for iterating through Object properties.

      When you have an object at hand you should probably use a `for...in` loop.

      Example:
      ```javascript
        let object={a:1,b:2,c:3,method:()=>{}};
        for(let value in object)
        console.log(value,object[value]);
      ```

      output :
    ```
         a 1
         b 2
         c 3
         method ()=>{}
     ```

      A for...in loop will iterate only enumerable object properties. Not all object properties are enumerable, even if they exist on the object. All non-enumerable properties will be skipped by for...in iterator. 

      You won’t see constructor and prototype properties in an output from the for...in loop. Although they exist on an object they are not considered to be enumerable. 

- ### While Loops

     The while loop loops through a block of code as long as a specified condition is true.or A while loop will iterate for an indefinite number of times until the specified condition (there is only one) evaluates to false. At which point your loop will stop and execution flow will resume.

     If you forget to increase the variable used in the   condition, the loop will never end. This will crash your browser.

     Syntax:
     ```javascript
    While(condition){
    Do something until condition is false
    }
    ```
    Once condition evaluates to false the while loop will break automatically:

    Example:
    ```javascript
    let loop=0;
    while(loop++<5)
    console.log(loop);   // 1 2 3 4 5
    ```
    A secondary condition can be tested within the loop. This makes it possible to break from the loop earlier if needed:

    Example:
    ```javascript
    While(condition_1){
    If(condition_2){
    break;
    }
    }
    ```
    1. While and continue

        The continue keyword can be used to skip steps:

        Example:
        ```javascript
        //while and continue
        let a=0;
        while(a++<1000){
            if(a>1)
            continue;  //The continue keyword can be used to skip steps
            console.log(a);  //1
        }
        ```
## 12. Arrays

 Many of the Array.* methods are iterators. Instead of passing your array into a for or a while loop you should use built-in Array methods instead. Arrays usually already have methods offering cleaner syntax for anything you would write yourself to solve the same problem. So why re-invent the wheel? 

 Array methods are attached to Array.prototype property. This means you can execute them directly from array object like array.forEach() or directly from array’s literal value like: [1,2,3].forEach();

  - ### Array.prototype.sort():
  
      A stable sorting algorithm is when two objects with equal keys appear in the same order in the sorted output as they appear in the unsorted input. But this is no longer the case. ES10 offers a stable array sort:

      ```javascript
        var fruit=[
            {name:"apple", count:13,},
            {name:"pear", count:12,},
            {name:"banana", count:12,},
            {name:"strawberry", count:11,},
            {name:"cherry", count:11,},
            {name:"blakberry", count:10,},
            {name:"pineaplle", count:10,},
        ];
        let my_sort=(a,b)=>a.count-b.count;
        let sorted=fruit.sort(my_sort);
        console.log(sorted);
      ```
      Output:
       ```
        0:{name: "blakberry", count: 10}
        1: {name: "pineaplle", count: 10}
        2: {name: "strawberry", count: 11}
        3: {name: "cherry", count: 11}
        4: {name: "pear", count: 12}
        5: {name: "banana", count: 12}
        6: {name: "apple", count: 13}
       ```
   - ### Array.forEach

      The forEach method will execute a function for every item in the array.

      Each iteration step receives 3 arguments value, index, object.

      It’s similar to a for-loop but it looks cleaner:

      ```javascript
        let fruit=['pear','banana','orange','apple','pineapple'];
        let print=function (item,index,object) {
            console.log(item);
        }
        fruit.forEach(print);
      ```
      Output:
      ```
        pear
        banana
        orange
        apple
        pineapple
       ```
       Starting from ES6 it can be suggested to use arrow functions together with Array methods. The code will be easier to read and maintain when building large scale applications. Let’s take a look at how we can make syntax cleaner: 
       
       Because in JavaScript functions are also expressions, you can pass the function directly into the forEach method:

        Example 1:
        ```javascript
        //function directly into forEach
        fruit.forEach(function(item,index,object){
            console.log(item,index,object);
        });
        ```

        But you might want to use an arrow function here: () => {}

        Example:
        ```javascript
        //arrow function directly into forEach
        fruit.forEach((item,index,object)=>{
            console.log(item,index,object);
        });
        ```

       Output: (for both methods)
       ```
        pear 0 (5) ["pear", "banana", "orange", "apple", "pineapple"]
        banana 1 (5) ["pear", "banana", "orange", "apple", "pineapple"]
        orange 2 (5) ["pear", "banana", "orange", "apple", "pineapple"]
        apple 3 (5) ["pear", "banana", "orange", "apple", "pineapple"]
        pineapple 4 (5) ["pear", "banana", "orange", "apple", "pineapple"]
      ```

      If you can get away with one argument and return statement you can use this slim form:

      Code:
      ```javascript
        //arrow function directly into forEach print item only
        fruit.forEach(item=>console.log(item));
       ```
     Output:
     ```
        pear
        banana
        orange
        apple
        pineapple
     ```  

   - ### Array.every:

     The  every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

     The method executes the function once for each element present in the array.

     If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values).

      If no false occur, every() returns true.

      every() does not execute the function for empty array elements.

      every() does not change the original array

      **Example:**
      ```javascript
        const ages = [32, 33, 16, 40];
        var ans=ages.every(checkAge)   
        function checkAge(age) {
        return age > 18;
        }
        console.log(ans);                    //false
      ```
  - ### Array.some:

     Return value: boolean 

     The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

      some() does not execute the function for empty array elements.

      some() does not change the original array.

      Similar to Array.every except it stops looping whenever it encounters a value that evaluates to true (and not false like in Array.every) Let’s compare:

       **Example:**
       ```javascript
        let number=[0,10,2,3,4,5,6,7];
        let condition=value=>value<10;     //value is less than 10
        let some=number.some(condition);   
        let every=number.every(condition);  
        console.log(some);                  //true
        console.log(every);                 //false
      ```
      Here some returns true because it checks first value: 0 for ¡ 10 and immediately returns true without having to check the rest of the values. 

      The every method returns false on the same data set. That’s because when it reaches the second item whose value is 10, the ¡ 10 test fails. 

      Note: Try not to think of some as an ”opposite” of every. In some cases they return the same result on the same data set.

   - ### Array.filter:

     Return value: new array consisting only of items that passed a condition.

     **Example:**
     ```javascript
        let number=[0,10,2,3,4,5,6,7];
        let condition=value=>value<10;     //value is less than 10
        let filtered=number.filter(condition);    
        console.log(filtered);                //[0,2,3,4,5,6,7]
        console.log(number);                 //original array unchanged
     ```
      The new filtered array contains all original items except 10.

      Because it did not pass  the ¡ 10 test. In a real-world scenario the condition can be much more complex and involve larger objects sets.

  - ### Array.map: 

      Return value: a copy of the original array with modified values (if any.) .

      **Example:**
      ```javascript
        let number=[0,1,256,3,4,5,6,7];
        let result=number.map(value=>value=value+1);
        console.log(result);    //[1, 2, 257, 4, 5, 6, 7, 8]
        console.log(number);    //[0, 1, 256, 3, 4, 5, 6, 7] original array unchanged
      ```

       Array.map is like Array.forEach but it returns a copy of the modified array. Note that original array is still unchanged.
   
   - ### Array.reduce:

        The reduce() method executes a reducer function for each value of an array.

        reduce() returns a single value which is the function's accumulated result.

        reduce() does not execute the function for empty array elements.

        reduce() does not change the original array.

        **Example:**
        ```javascript
        const array1 = [1, 2, 3, 4];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        // 1 + 2 + 3 + 4
        console.log(array1.reduce(reducer));               // expected output: 10
        // 5 + 1 + 2 + 3 + 4
        console.log(array1.reduce(reducer, 5));         // expected output: 15
        ```

   - ### Array.flat():

        The flat() method is an inbuilt array method that flattens a given array into a newly created one-dimensional array. It concatenates all the elements of the given multidimensional array, and flats upto the specified depth. We can specify the depth limit to where we need to flatten the array. By default, the depth limit is 1.

        **Example:**

        ```javascript
        let multi=[1,2,3,[4,5,6,[7,8,9,[10,11,12]]]];
        console.log(multi.flat());                  //[1, 2, 3, 4, 5, 6, Array(4)]
        console.log(multi.flat().flat());           //[1, 2, 3, 4, 5, 6, 7, 8, 9, Array(3)]
        console.log(multi.flat().flat().flat());    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        console.log(multi.flat(Infinity));          //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        console.log(multi.flat(3));                 //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        ```
  - ###  Array.flatMap():

       The array.flatMap() is an inbuilt function in JavaScript which is used to flatten the input array element into a new array.

       This method first of all map every element with the help of mapping function, then flattens the input array element into a new array. 

       **Example:**

       ```javascript
        let array=[1,2,3,4,5];
        let Map=array.map(x=>[x,x*2]);
        let flat_map=array.flatMap(v=>[v,v*2]);
        console.log(Map);
        console.log(flat_map);   // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
       ```
      Output:

       ```
        0: (2) [1, 2]
        1: (2) [2, 4]
        2: (2) [3, 6]
        3: (2) [4, 8]
        4: (2) [5, 10]
        [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
       ```
   - ### String.prototype.matchAll():

      the matchAll() method is used to return all the iterators matching the reference string against a regex (regular expression). An important use of the matchAll() method is that it can be used to capture groups with the /g flag giving it an advantage over the match() method which ignores capturing groups with the /g flag.

      To match multiple items we used String.match with a regular expression and /g (”global”) flag or RegExp.exec and/or RegExp.test with /g. 

      First, let’s take a look at how the older spec worked. 

      String.match with string argument only returns the first match:

      **Example:**
      ```javascript
        let string="hello";
        let matches=string.match("l");
        console.log(matches[0]);      //l
      ```
      The result is a single "l" (note: the match is stored in matches[0], not matches.) 

      Only "l" is returned from a search for "l" in the word "hello". 

       The same goes for using string.match with a regex argument. Let’s locate the "l" character in the string "hello" using the regular expression /l/:

      **Example:**
      ```javascript
        let string="hello";
        let matches=string.match(/l/);
        console.log(matches[0]);      //l
      ```

       - Adding /g to the mix:

         String.match with a regex and the /g flag does return multiple matches:

         **Example:**
         ```javascript
            //Adding /g to the mix
            let string="hello";
            let ret=string.match(/l/g);   
            console.log(ret);     //["l", "l"]
         ```

       - Regular Expression Capture Groups:

           Capturing groups in regex is simply extracting a pattern from () parenthesis.

            You can capture groups with /regex/.exec(string) and with string.match.

            Regular capture group is created by wrapping a pattern in (pattern).

            But to create groups property on resulting object it is: (?pattern). 

            To create a group name: prepend ? inside brackets. The resulting object will have a new property groups.name attached (see code below.) 

            This is the string we will take as the specimen for our experiment:

           **Example:**
           ```javascript
            const string ='black*raven lime*parrot while*seagull';
            const regex=/(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;
            while(match=regex.exec(string))
            {
                let value=match[0];
                let index=match.index;
                let input=match.input;
                console.log(`${value} at ${index} with '${input}'`);
                console.log(match.groups.color);
                console.log(match.groups.bird);
            }
           ```
           Output:
           ```
            black*raven at 0 with 'black*raven lime*parrot while*seagull'
            black
            raven
            lime*parrot at 11 with 'black*raven lime*parrot while*seagull'
            lime
            parrot
            while*seagull at 23 with 'black*raven lime*parrot while*seagull'
            while
            seagull
           ```

           If you remove /g from this regex, you will create an infinite loop cycling on the first result forever.

          **Good reasons to use .matchAll()**
            1. It can be more elegant when using with capture groups. A capture group is simply the part of regular expression with ( ) that extracts a pattern.
            2. It returns an iterator instead of array. Iterators on their own are useful. 
            3. An iterator can be converted to an array using spread operator (...) 
            4. It avoids regular expressions with /g flag... useful when an unknown regular expression is retrieved from database or outside source and used together with the archaic RegEx object. 
            5. Regular expressions created using RegEx object cannot be chained using the dot (.) operator.
            6. Advanced: RegEx object changes internal .lastIndex property that tracks  last matching position. This can wreck havoc in complex cases.

       - Capture Groups example with .matchAll()

            .matchAll returns an iterator so we can walk it with for...of loop.

            **Example:**
            ```javascript
            const string ='black*raven lime*parrot while*seagull';
            const regex=/(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;
            for(const match of string.matchAll(regex))
            {
                let value=match[0];
                let index=match.index;
                let input=match.input;
                console.log(`${value} at ${index} with '${input}'`);
                console.log(match.groups.color);
                console.log(match.groups.bird);
            }
           ```
            Output:
            ```
            black*raven at 0 with 'black*raven lime*parrot while*seagull'
            black
            raven
            lime*parrot at 11 with 'black*raven lime*parrot while*seagull'
            lime
            parrot
            while*seagull at 23 with 'black*raven lime*parrot while*seagull'
            while
            seagull
            ```
   - ### Comparing Two Objects:

        It makes sense to compare two literal numeric values such as 1 === 1 or literal boolean values true === false, but what does it mean to compare two objects? Furthermore == and === operators won’t help because they compare by reference and not by value: [] and [] may be equal by value but they are different arrays:
        ```
        [] === []//false
        let x = []; x === x;  //true
        ```
        **Example:**
        ```javascript
        var a={prop:[1,2],obj:{}},b={prop:[1,2],obj:{}};
        console.log(objcmp(a,b));     
        function objcmp(x,y){
            let A=Object.getOwnPropertyNames(x);
            let B=Object.getOwnPropertyNames(y);
            if(A.length!=B.length)
            return false;
            for(let i=0;i<A.length;i++){
                let propName=A[i];
                if(x[propName]!==y[propName])
                return false;
            } 
            return true;
        }
        ```
       Output:
       ```
        False
       ```
  - ### Test array:
      ```javascript
        function array(value) {
            return typeof value.reduce=="function"&&
                typeof value.filter=="function"&&
                typeof value.map=="function"&&
                typeof value.length=="number";
        }
        //test the function
        console.log(array(1));        //false
        console.log(array("string")); //false
        console.log(array({a:1}));     //false
        console.log(array(true));       //false
        console.log(array([]));         //true
        console.log(array([1,2,3,4,5]));//true
      ```  
   - ### Writing arrcmp:

       Let’s write our own arrcmp function based on the assumption the array equality means that each value at each corresponding index in both arrays match:

      **Example:**
      ```javascript
        let a=[1,2];
        let b=[1,2];
        let c=[5,5];
        function is_array(value) {
            return typeof value.reduce=="function"&&
                typeof value.filter=="function"&&
                typeof value.map=="function"&&
                typeof value.length=="number";
        }
        function arrcmp(a,b){
            //one or more values are not arrays:
            if(!(is_array(a)&&is_array(b)))
                return false;
            //not equal by length
            if(a.length!=b.length)
                return false;
            //compare by value
            for(let i=0;i<a.length;i++)
            if(a[i]!==b[i])
                return false;
            return true;     
        }
        console.log(arrcmp(a,b));   //true
        console.log(arrcmp(b,b));   //true
        console.log(arrcmp(b,c));   //false
      ```  
     There is no built in function for comparing arrays in JavaScript.

  - ### Improving objcmp:

     **Example:**
     ```javascript
        var a={prop:[1,2],obj:{}},b={prop:[1,2],obj:{}};
        console.log(objcmp(a,b));    //true
        console.log(objcmp({a:{b:1}},{a:{b:1}}));
        console.log(objcmp({a:[1,2]},{a:[1,2]}));
        console.log(objcmp({a:{b:1}},{a:{b:3}}));
        console.log(objcmp({a:[1,2]},{a:[1,3]}));

        function is_array(value) {
            return typeof value.reduce=="function"&&
                typeof value.filter=="function"&&
                typeof value.map=="function"&&
                typeof value.length=="number";
        } 
        function arrcmp(a,b){
            //one or more values are not arrays:
            if(!(is_array(a)&&is_array(b)))
                return false;
            //not equal by length
            if(a.length!=b.length)
                return false;
            //compare by value
            for(let i=0;i<a.length;i++)
            if(a[i]!==b[i])
                return false;
            return true;     
        }
        function objcmp(x,y){
            let A=Object.getOwnPropertyNames(x);
            let B=Object.getOwnPropertyNames(y);
            if(A.length!=B.length)
            return false;
            for(let i=0;i<A.length;i++){
                let propName=A[i];
                let p1=x[propName];
                let p2=y[propName];
                if(is_array(p1)&&is_array(p2)){
                    if(!arrcmp(p1,p2))
                    return false;
                }else
                if(p1.constructor===Object&&p2.constructor===Object){
                    if(!objcmp(p1,p2))
                    return false;
                }else if(p1 !==p2)    
                return false;
            } 
            return true;
        }
      ```
## 13. Functions 

   A JavaScript function is a block of code designed to perform a particular task.

  A JavaScript function is executed when "something" invokes it (calls it).

   A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

   Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

   The parentheses may include parameter names separated by commas:
    (parameter1, parameter2, ...)

   The code to be executed, by the function, is placed inside curly brackets: {}

   In JavaScript there are two types of functions: the standard function that can be defined using function keyword and an arrow function ()=>{} added later in ES6.

  - ### Function Anatomy:

     The function definition consists of the function keyword followed by its name (shown as update, in the following example) parenthesis containing a list of parameter names (a,b,c) and the function body enclosed in brackets.

      The return keyword is optional. But function will return anyway once all statements in its body are done executing, even if return keyword is not specified. 

      The this keyword inside an ES5 style function points to the context from which the function was executed. Very often it is the global window object. If the function is used to instantiate an object using new keyword then this keyword will point to object instance that was instantiated using function. 

      The arguments is an array-like object that contains 0-index list of arguments that were passed into the function, even if parameter names were not specified in the function’s definition.

  - ### Anonymous Functions:

      Nameless or anonymous functions can be defined by using the same syntax but skipping the function name.

      Anonymous functions are often used as event callbacks, where we usually don’t need to know what the names are – we simply want to execute them at a specific time after an event has finished doing its work:

      **Example:**
      ```javascript
        setTimeout(function (){
            console.log("print something in 1 second.");
            console.log(arguments);
        },1000);
      ```  
      Output:
      ```
      print something in 1 second.
      Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
      ```
      **Example:**
      ```javascript
        document.addEventListener("click",function (){
            console.log("Document was clicked.");
            console.log(arguments);
        });
      ```

  - ### Assigning Functions To Variables:

       Anonymous functions can be assigned to a variable, making them named functions again. By doing this you can separate the function definition from its use in an event-based method.

     **Example:**
     ```javascript
        let print=function (){
            console.log("print something in 1 second.");  //print something in 1 second.
            console.log(arguments);
        }

        let clicked=function (){
            console.log("Document was clicked.");
            console.log(arguments);
        }
        Print();
        Clicked();
      ```  
      Output:
      ```
        print something in 1 second.
        Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
        Document was clicked.
        Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
      ```

     You can also pass them to the event functions just by their name:
      ```javascript
        setTimeout(print,1000);
        document.addEventListener("click",clicked);
      ```
          
   - ### Function Parameters:

      Function parameters are optional. But in many cases you will find yourself defining some. You can use default function parameters to pass things like primitives, arrays and objects into a function. Anything that evaluates to a single value will do it.

     **Example:**
     ```javascript
        function  fun(text,number,array,object,func,misc){
            console.log(text);
            console.log(number);
            console.log(array);
            console.log(object);
            console.log(func);
            console.log(misc);
            //call the function by its parameter name
            func();
        }
     ```

     You can pass the name of another function. This way you can call that function at some point later inside another function.

      Let’s pass some arguments into function’s parameters:
      ```javascript
        function volleyball(){
            return "volleyball";
        }

        fun("text",10,[1,2,3],{count:1},volleyball,volleyball());
      ```  
      Note that we’re passing the function name Volleyball and the result: Volleyball() (which will evaluate to string value ”Volleyball.”) into the last two parameters of the function Fun();

     Output:
     ```
        text
        10
        (3) [1, 2, 3]
        {count: 1}
        ƒ volleyball(){
            return "volleyball";
        }
        Volleyball
      ```  
     That’s a useful variety of primitives and objects! 

      The last value is generated by calling function Volleyball, which was passed into parameter func. This means we can simply call it by calling func() instead of Volleyball(), since func is its name inside the function.

   - ### Checking For Types:

      JavaScript is a dynamically-typed language. The type of a variable is determined by its value. The variable definition simply assumes the type. This sometimes can be the cause of subtle bugs.

       For example, even though JavaScript provides a number of different object types to work with, it doesn’t really provide an automatic safeguard that makes sure the arguments passed into the function were what you expect them to be.

       What if in the previous example, we passed an array or an object into func parameter? The function expects it to be a function. We wouldn’t be able to call func() if func wasn’t a function.

       Let’s narrow down on the problem:

      **Example:**
      ```javascript
        function fun(func){
            console.log(func());
        }
        var array=[];
        var f=function(){}
        fun(array);
      ```  
     Output:
     ```
        TypeError: func is not a function
            at fun (<anonymous>:2:17)
            at <anonymous>:6:1
      ```      
     This is a problem if it happens in production code.

   - ### Safeguarding Function Parameters:

      The solution is to safeguard the value by checking its type. JavaScript has a built-in directive typeof that we can use before calling the function:

     **Example:**
     ```javascript
        function fun(func){
            //call function by its parameter name
            if(typeof func =="function")
                console.log(func());   
        }
        var array=[];
        var f=function(){}
        fun(array);     //pass array instead of function
      ```  
      The function fun(array) was called. The function expects a function name as an argument but an array was sent. The typeof test failed and nothing happened but at least our program didn’t break.

      You can do the same with other types if it becomes imperative that a particular value must be in absolute compliance with a particular type.

  - ### Origin of this keyword:

      The JavaScript this keyword refers to the object it belongs to.

       In an object method, this refers to the "owner" of the method.

     **Example:**
     ```javascript
        const person = {
            firstName: "John",
            lastName : "Doe",
            id       : 5566,
            fullName : function() {
            return this.firstName + " " + this.lastName;
            }
        };
        console.log(person.fullName());   //John Doe
      ```
## 14. Higher-order Functions:

  For example Array.map iterates through a set of values and applies a modification.

  The Array.reduce ”reduces” a set of values to a single value.
    
  Event-based setTimeout is a higher-order function, and so is addEventListener.

  - ### Definition:
    
      A higher-order function is a function that either takes a function as one of its parameters or returns a function (or both.)

  - ### Iterators:

       The Array.map method is one of the most common higher-order functions. It takes a function to run on every item in the array. Then it returns a modified copy of the original array. 

     **Example:**
     ```javascript
        function add(v){
            return v+1;
        }
        let array=[1,2,3,4,5];
        var result=array.map(add);
        console.log(result);         //[2, 3, 4, 5, 6]
      ```  
     Here is a rather abstract way of thinking about the problem: ”Add 1 to each item in the array.” Simple logic which is defined in add one function.

      The Array.map method does not expose its loop implementation. The idea is not to make the iterator merely more efficient either (although, that would help) but hide it completely. We are only concerned with supplying a first-order function to the map method. Internally, it will run the function on each value in the array. 

      This is a very powerful technique that can apply to many problems. But the greatest advantage of using a higher-order function is that it abstracts problem solving. It helps us focus on the key: running the function on each individual item in the array, while abstracting away the for-loop (or while loop).

      We will create a first-order function called add one, which simply adds 1 to the value. This is just a helper function that will work together with a higher-order function (first-order and higher-order functions are often used together.)
      ```javascript
       function add(v){
            return v+1;
       }
     let array=[1,2,3,4,5];
     ```

      For a function to qualify as a higher-order function it either needs to take a function as one of its parameters, or return a function. As long as one of those conditions is met we are creating a higher-order function.

      The map function will take an array to work on. It will return a copy of that array with each item modified by the add one function we have written earlier, which will be passed as the second parameter.

      Let’s write our own version of map which will be similar to what Array.map does:

      **Example:**
      ```javascript
        function map(array,f){
            let copy=[];
            for(let index=0;index<array.length;index++){
                let original=array[index];
                let modified=f(original);
                copy[index]=modified;
            }
            return copy;
        }
        console.log(map(array,add));    //[2, 3, 4, 5, 6]
      ```

      Line-by-line explanation of map() function:

      The function map takes two parameters: an arbitrary array of values and the function which we want to apply to each item in the array.
      ```
       function map(array,f){
      ```     
      First, copy array was created and assigned to an empty array literal: []. This array will store a modified copy of the original array that was passed into the function.
      ```
       let copy=[];    return value placeholder array
      ```
      Then a for-loop iterates through the array we received as first parameter. This is the part we want to make abstract. When using the function we won’t even have to think about the for-loop:
      ```
        for(let index=0;index<array.length;index++){
      ```      
      Inside the loop, let’s copy the value at current index in the original array to a temporary variable original.
      ```
        let original=array[index];
      ```  
      Now let’s pass the value in original variable to the first-order function that was passed to this function:
      ```
        let modified=f(original);
      ```  
      The f function will do the magic (in our example, add 1 to the original value, but it can be anything) and return the modified value. So let’s copy the modified value into our copy array which is a placeholder for the entire modified array.
      ```
        copy[index]=modified;
      ```  
     Finally, a copy of the modified array is returned:
     ```
      return copy;
     ``` 
     Once all items have been copied and processed by add one function, they will be stored in copy array which will then be used as the return value of the function.

      **Side note:**    The reduce method – which is also a higher-order function – uses something known as an accumulator. The accumulator in Array.reduce serves a similar purpose as the copy array in this example. In reduce, however, the accumulator is not an array – it is a single value that cumulatively gathers together all items from the array and combines them into a single return value. That’s why reducers are a better solution when you need to combine values.

  - ### Calling our custom map function

    **Example:**
    ```javascript
        function add(v){
            return v+1;
        }
        function map(array,f){
            let copy=[];
            for(let index=0;index<array.length;index++){
                let original=array[index];
                let modified=f(original);
                copy[index]=modified;
            }
            return copy;
        }
        let array=[0,1,2];
        array= map(array,add);  
        console.log(array);    //[1,2,3]
      ```  
      Here add one is the function from earlier in this chapter. It simply adds 1 to the value that was passed to it and returns it.

       The result? The original array [0,1,2] is now [1,2,3]. All items in the array were incremented by 1. 

       We’ve just written our own map method that internally does exactly the same thing as the built-in method Array.map. This operation is so common that it was added as a native method on the Array object.

  - ### Calling Array.map function
      Yes, we can do exactly the same thing using a built-in Array method map. It does exactly (or relatively) the same thing: 

     **Example:**
     ```javascript
        function add(v){
            return v+1;
        }
        let array=[1,2,3,4,5];

        var result=array.map(add);
        console.log(result);        //[2, 3, 4, 5, 6]
        console.log(array);         //[1, 2, 3, 4, 5] it is unchanged
      ```
      Sounds easy. We could have used this method from the very start. But by writing our own map method we now actually understand how it works internally.

      This will help us understand many other higher-order functions that implement iteration over a list of items, such as filter, every, reduce, etc. They all use similar internal code, with just a few slight differences.

   - ### Array.prototype.filter
     Without Higher-order function
     **Example:**
     ```javascript
        const persons = [
        { name: 'Peter', age: 16 },
        { name: 'Mark', age: 18 },
        { name: 'John', age: 27 },
        { name: 'Jane', age: 14 },
        { name: 'Tony', age: 24},
        ];
        const fullAge = [];for(let i = 0; i < persons.length; i++) {
        if(persons[i].age >= 18) {
            fullAge.push(persons[i]);
        }
        }console.log(fullAge);
      ```  
      With Higher-order function filter
      ```javascript
        const persons = [
        { name: 'Peter', age: 16 },
        { name: 'Mark', age: 18 },
        { name: 'John', age: 27 },
        { name: 'Jane', age: 14 },
        { name: 'Tony', age: 24},
        ];
        const fullAge = persons.filter(person => person.age >= 18);
        console.log(fullAge);
      ```  
  - ### Array.prototype.reduce

      Without Higher-order function

     **Example:**
     ```javascript
        const arr = [5, 7, 1, 8, 4];
        let sum = 0;for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        }// prints 25
        console.log(sum);
      ```  
      With Higher-order function reduce

     **Example:**
      ```javascript
        const arr = [5, 7, 1, 8, 4];
        const sum = arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
        });// prints 25
        console.log(sum);
      ```  
## 15 Arrow Functions

  Arrow functions  provide a slim syntax for creating function expressions in JavaScript. Instead of defining the function using the function keyword, arrow functions have following syntax

  **Syntax:**
  ```
    //arrow function syntax
    ()=>{};
  ```  
  but is limited and can't be used in all situations.

  You can assign them to a variable name:

  **Example:**
  ```javascript
    //create an arrow function and assign it to variable
    var Function=()=>{console.log("hello world")};
    Function();  //hello world
  ```  
   And have values returned from them using return keyword:

  **Example:**
  ```javascript
    //return a value from an arrow function
    var Function=()=>{ return "hello world"};
    Function();  //hello world
  ```

   - ### return-less return:

      Arrow functions add one other unique feature. You can return values without using return keyword.

      Even after removing {} brackets and return keyword in the example below 1 is still treated as a valid return value. This makes your code a lot more clean than using the old and redundant ES5 function syntax:

     **Example:**
     ```javascript
      //return value from arrow function without return keyword
      var Function=()=>"hello world"; 
      Function();    //hello world
     ```

     This works only if the function has only one statement.

     Remember that in JavaScript functions are expressions. An expression is anything that returns a single value. Similar to how a math equation returns a value. 

     Arrow functions help us expand on the idea by providing an even slimmer syntax (by removing parenthesis and the need to explicitly specify return keyword:)

     **Example:**
     ```javascript
        //with parentheses pass value
        var myfunction=(val)=>val;
        console.log(myfunction(100));    //100

        //without parentheses pass value
        myfunction=val=>val;
        console.log(myfunction(10));    //10
     ```
   - ### Arrow Functions As Events:

     Some believe using arrow functions is a more elegant solution for events:
     ```javascript
     var clicked=(event)=>{console.log(event.target);};
     ```
   - ### without parantheses:
     ```javascript
     var clicked=event=>console.log(event.target);
     ``` 
   - ### Arrow Function Anatomy:

     Arrow functions do not have array-like arguments object. They also cannot be used as constructors. The this keyword points to the same value this points to in the scope just outside of the arrow function. 

     Arrow functions are expressions – they do not have a named syntax, like regular functions defined with function keyword. But just like regular functions, you can assign them to variable names.

   - ### Arguments

     **Example:**
     ```javascript
        var f=(argu1,argu2)=>{console.log(argu1,argu2);};
        console.log(f(10,20));    // 10 20
     ```    
   - ### Returning From An Arrow Function:

     Arrow functions are primarily designed as expressions, so you might want to spend extra time on learning how they return values:

     **Example:**
     ```javascript
        let a=x=>"returns";
        let b=x=>{return "returns";}
        let c=x=>{return random()>=0.5}
        let d=x=>{"won't return";}

        console.log(a(1));    //returns
        console.log(b(1));    //returns
        console.log(d(1));    //undefined

        //be careful when using with higher-order functions
        let e=[1];
        e.map(a);     //returns
        e.map(b);    //returns
        e.map(d);    //undefined
     ```   
     `d` arrow function is the only function that does not return `a` value at all. Be careful not to use this syntax with higher-order functions.

   - ### Similarities Between ES-style Functions:

     There are some similarities between arrows and classic functions. Most of the time you can use arrow functions as a replacement to standard ES5 functions without a hitch!

     Let’s try this example to get started with our discussion about arrow functions. I defined two classic ES5 functions classic one and classic two, followed by definition of arrow – an ES6-style arrow function:

     **Example:**
     ```javascript
        function function1(){
            console.log("function one");
            console.log(this);
        }
        var function2=function(){
            console.log("function two");
            console.log(this);
        }
        var arrow=()=>{
            console.log("arrow function");
            console.log(this);
        }
        console.log(function1());
        console.log(function2());
        console.log(arrow());
     ```

     **Console output:**
     ```
        function one
        Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}
        function two
        Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}
        arrow function
        Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}
     ```   
     When defined in global scope, it only seems like there is no difference between classic and arrow functions, in terms of this binding.

   - ### No this binding:

     Arrow functions do not bind this keyword. They look it up from whatever this equals in the outer scope, just like any other variable. Hence, you can say arrow functions have a ”transparent” scope.

   - ### No arguments object:

     The arguments object does not exist in arrow function scope, you will get a reference error if you try to access it:

     **Example:**
     ```javascript
        let f=()=>{
            console.log(arguments);   
        }
        function Function(){
            console.log(arguments);
        }
        Function();         //Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
        f();                //ReferenceError: arguments is not defined
     ```

   - ### No Constructor:

      ES5-style functions are object constructors. You can create and call a function but you can also use same function as an object constructor – together with new operator – to instantiate an object. The function itself becomes class definition. 

       For this reason you would often hear it said that in JavaScript all functions are objects. After ES6 specification introduced arrow functions to the language this statement is no longer true. Arrow functions cannot be used as object constructors.

      Therefore, arrow functions cannot be used to instantiate objects. They work best as event callbacks or function expressions in methods such as Array.filter, Array.map, Array.reduce and so on... In other words, they are more proper in context of Functional Programming style. 

      Thankfully, modern JavaScript is rarely written using ES5-style functions masquerading as object constructors. It’s probably a good idea to start defining your classes using class keyword anyway, instead of using function constructors.

      When classic and arrow functions are used as event callbacks:

      There is a difference between classic ES5 functions and arrows, when they are used as event callbacks. 

      Here is an example of an arrow function that outputs a string and this property to console in the event of a click on the document:

     **Example:**
     ```javascript
        //create an arrow function that outputs some info
        let arrow=(event)=>{
            console.log("hello,i am an arrow function");
            console.log(this);
        }
        //attach arrow function to an event listener on document
        document.addEventListener("click",arrow);

        //normal ES5 function
        function classic(event){
            console.log("hello,i am an classic ES5 function");
            console.log(this);
        }
        //attach an ES5 function to an event listener on document
        document.addEventListener("click",classic);
     ```   
     **console output:**
     ```
        hello,i am an arrow function
        Window {window: Window, self: Window, document: document, name: "", location: Location, …}
        hello,i am an classic ES5 function
        #document
     ```

      Inside the arrow function’s scope this property points to Window object. In classic ES5 function this property points to the target element that was clicked.

     What happens here is that arrow function took the Window context with it, instead of giving you the object that refers to the clicked element.

   - ### Inherited this Context:

     The arrow function inherits the lexical scope based on where it was used, not where it was defined. Here it so happens that the arrow function was both defined and called in global scope context (Window object.) 

     To truly understand this, let’s draw another example, where I will attach arrow function B() to a click event.

      But this time, I will execute addEventListener function from another class called Classic instead of Window like in the previous example.

      Remember that when you use new operator, you execute the function as though it was an object constructor. This means that every statement inside it will be executed from the context of its own instantiated object: object, not window.

     **Example:**
     ```html
        <html>
            <head>
                <title>Inherited this Context</title>
                <script>
                function classic(){
                    let b=()=>{
                        console.log("hello,i am arraow function b()");
                        console.log(this);
                    }
                    document.addEventListener("click",b);
                }
                let object =new classic();
                </script>
            </head>
            <body>
                <h3>click me!</h3>
            </body>
        </html>
     ```   
     A new context is created when using new operator to instantiate an object. Anything called from within that object will have its own context.

     After running this code and clicking on document, we get following console output:

     **Console output :**
     ```
        hello,i am arraow function b()
        classic {}
     ```   
     Event was attached from context of Classic constructor and not from the context of global scope object Window like in the previous examples. 

      The event has literally ”taken the context it was executed from” with it into its own scope via the this property.

     This type of context chaining is common to JavaScript programming. 
## 16 Creating HTML Elements Dynamically

   JavaScript creates a unique object for each HTML tag currently present in your *.html document. They are automatically included to DOM (Document Object Model) in your application once the page is loaded into browser. But what if we want to add new elements without having to touch the HTML file?

   Creating and appending another element to an existing element will dynamically insert it into the DOM and instantly display it on the screen as if it were directly typed into the HTML source code. 

   However, this element is not typed directly into your HTML document using HTML tag syntax. Instead, it is created dynamically by your application. 

   The method createElement natively exists on the document object. It can be used to create a new element:

   **Example:**
   ```javascript
    //dynamically create an HTML element
    let e1=document.createElement("div");
    let e2=document.createElement("span");
    let e3=document.createElement("p");
    let e4=document.createElement("img");
    let e5=document.createElement("input");
   ``` 
   At this point none of the created elements are attached to DOM yet.

   When adding a new HTML element dynamically, it is usually inserted into another element that already exists in the DOM.

    let’s set some CSS styles on the newly created element.

  - ### Setting CSS Style:

     we created an empty element without dimensions, background color or border. At this point all of its CSS properties are set to defaults. We can assign a value to any standard CSS property via style property.

     **Example:**
     ```javascript
        //create a <div> element dynamically
        let div =document.createElement("div");

        //set ID of the element
        div.setAttribute("id","element");

        //set class attribute of the element
        div.setAttribute("class","box");

        //set element's CSS style via style property
        div.style.position="absolute";
        div.style.display="block";
        div.style.width="100px";
        div.style.height="100px";
        div.style.top=0;
        div.style.left=0;
        div.style.zIndex=1000;
        div.style.borderStyle="solid";
        div.style.borderColor="gray";
        div.style.borderWidth="1px";
        div.style.backgroundColor="white";
        div.style.color="black";
      ```

     In CSS dash (-) is a legal property name character. But in JavaScript it is always interpreted as the minus sign. Using it as part of a JavaScript identifier name will cause an error. For this reason, single-word CSS property names remain the same – style.position and style.display for example. Multi-word property names are changed to camel-case format, where the second word is capitalized. For example z-index becomes .zIndex, and border-style becomes .borderStyle.

   - ### Adding Elements To DOM with .appendChild method:

     Method element. appendChild(object ) inserts an element object into DOM. 

     Here element can be any other element that currently exists in the DOM.

     This method exists on all DOM element objects, including document.body.

      - ### document.body:
        **example:**
        ```javascript
         //Insert the element into the body tag using appendChild method:
         document.body.appendChild(div);
        ``` 
         Although very common the body tag is not the only place you can add the newly created element.

       - ### getElementById:

         Insert element into another element by id:

         **Example:**
         ```javascript
            //insert element into another element with id="id-1"
            document.getElementById("id-element").appendChild(div);
         ```   
       - ### querySelector:

         Insert element to any element selected using a valid CSS selector:

         **Example:**
         ```javascript
            //insert element into selected parent element
            let selector="#parent.inner.target";
            document.querySelector(selector).appendChild(div);
         ```   
   - ### Writing A Function To Create Elements:

     In this section we will write our own function that makes it easy to create HTML elements dynamically. Before writing the function body, let’s take a closer look at its parameters.

     - ### Function Parameters:

         To accommodate for most cases, we don’t need to include all CSS properties, just ones that have most impact on element’s visual appearance.

         **Example:**
         ```javascript
            let element=(id,   //id attribute
                        type, //"static","relative" or "absolute" 
                        l,     //left
                        t,     //top
                        w,      //width
                        h,      //height
                        z,      //z-index
                        r,      //right
                        b)={    //buttom
                        //function body
                    }
         ```

         Most of the parameters are optional. If you skip them, either default values will be used – defined using const keyword inside the function body  or not assigned (if you pass null, for example.)

          Last parameters on the argument list: `r` and `b`(right and bottom) will override standard placement in top and left corner of the parent element. 

         Using this function we can create basic HTML elements with one line of code:

         **Example:**
         ```javascript
            //static 100px x 25px at 0 x 0 with "unset" z-index
            let A=element("id-1","static",0,0,100,25,"unset");

            //Relative 50px x 25px at 0 x 0 with z-index=1
            let B=element("id-2","relative",0,0,50,25,1);

            //Absolute 50px x 25px at 10px x 10px z-index=20
            let c=element("id-3","absolute",10,10,50,25,20);
         ```

      - ### Function Body:

         the body of the element-creation function:

         **example:**
         ```javascript
            //create a generic HTML element
            let element =(id,type,l,t,w,h,z,r,b,tagval)=>{
                //default-used to replace missing arguments
                const position=0;
                const size=10;
                const Z=1;
                //create a <div> element dynamically
                let div=document.createElement("div");
                //inner html
                div.innerHTML=tagval;
                //set ID of the element
                div.setAttribute("id",id);
                //set abosolute behavior
                div.style.position=type;
                div.style.display="block";
                if(r)//if right is provided,reposition element
                    div.style.right=r?r:position+"px";
                else
                    div.style.left=l?l:position+"px";

                if(b)//if bottom is provided,reposition element
                    div.style.bottom=b?b:position+"px";
                else
                    div.style.left=t?t:position+"px";

                div.style.width=w?w:size+"px";
                div.style.height=h?h:size+"px";
                div.style.zIndex=z?z:Z;

                //return the element object we just created
                return div;
            };
            element("id1","button",10,10,10,10,10,10,10,"created by function");
         ```   
          Creating UI elements often requires pixel-perfect precision. This function will create a position:absolute element (unless otherwise specified) with default size of 10px in each direction, unless replacement values are supplied via its arguments: w and h parameters.

       - ### Importing And Using element() Function:

         **Example:**
         ```html
            <script type=module>
                    import {element} from "./functionbody.js";
                    let A=element("id1",0,0,100,50,1);
                    let B=element("id2",null,null,25,25,1,10,5);
                    B.addElement(A);
                    document.body.addElement(A);    
            </script>
         ```  

   - ### Creating objects using function constructors:
      
      Let’s create a function called Season:

     **Example:**
     ```javascript
        function Season(name){
            this.name=name;
            this.getName=function(){
                return this.name;
            }
        }
        To instantiate four seasons:
        let winter=new Season("winter");
        let spring=new Season("spring");
        let summer=new Season("summer");
        let autumn=new Season("Autumn");
        console.log(winter);
        console.log(winter);
        console.log(winter);
        console.log(winter);
     ```   
     **console output:**
     ```
        Season {name: "winter", getName: ƒ}
        Season {name: "winter", getName: ƒ}
        Season {name: "winter", getName: ƒ}
        Season {name: "winter", getName: ƒ}
     ```   
     This creates a problem, because function getName is copied 4 times in memory, but its body contains exactly the same code.

     In JavaScript programs Objects and Arrays are created all the time. Imagine if you instantiated 10000 or even 100000 objects of a particular type, each storing a copy of the same exact method. 

      This is rather wasteful. Could we somehow have a single getName function?

      The answer is yes. For example, native function .toString() you may have used before as Array.toString() or Number.toString() exists in memory at a single location, but it can be called on all built-in objects!

## 17 Prototype

  When a function is defined two things happen: the function object is created, because functions are objects. Then, a completely separate prototype object is created. The prototype property of the defined function will point to it.

  defined a new function human :

  **Example:**
  ```javascript
   function human(name){}
  ``` 
  You can verify that prototype object is created at the same time:
  ```javascript
   typeof human.prototype;       //"object"
  ```
  human.prototype will point to the prototype object. This object has another property called constructor, which points back to the human function.

   human is a constructor function, used to create objects of type human. Its prototype property points to a separate entity in memory: prototype object. There is one separate prototype object per each unique object type (class).

   Some will argue that there are no classes in JavaScript. But technically, human is a unique object type, and basically that’s what a class is.

   Note, prototype property is not available on an instance of an object, only on the constructor function. On an instance, you can still access prototype via proto , but should probably use static method Object.getPrototypeOf(instance) which returns the same prototype object as proto (in fact proto () is a getter.)

   - ### Prototype on Object Literal:

     create an object literal:

     **Example:**
     ```javascript
        let literal={ 
            property:10,
            method:function(){} 
        };
     ```   
     Internally it is wired into prototype as an object of type Object, even though it wasn’t created using the new operator.
     ```javascript
        literal.__proto__;               //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
        literal.__proto__.constructor;   //ƒ Object() { [native code] }
        literal.constructor;             //ƒ Object() { [native code] }
     ```   
     When literal was created, literal. proto was wired to point to Object.prototype.

     Object.prototype was already created internally by JavaScript. Whenever a new object type is defined, a secondary object to serve as its prototype is created.

   - ### Prototype Link:

       When an object is instantiated using new keyword, the constructor function executes to build the instance of that object.

     **Example:**
     ```javascript
        let instance =new Object();
        instance.property=123;
        instance.method=function(){}

        instance.__proto__;             //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
        instance.__proto__.constructor; //ƒ Object() { [native code] }
        instance.constructor;           //ƒ Object() { [native code] }
      ```  
      In this case Object constructor function is executed and we get a constructed link.

      The .prototype property points to a separate object: the built-in prototype object.

       In this case it’s Object.prototype. It is similar to human.prototype from the earlier example: in this case we just don’t control how Object was created, because Object is a preexisting built-in type.

      The instance of an object of type Object has proto property which points to the prototype object of the constructor from which it was instantiated.

      This three-way relationship between the Object, secondary prototype object that was created, and the instance of that object with proto pointing to Object’s prototype object is a peculiar structure.

      This pattern represents just one link in a prototype chain of objects.

   - ### Prototype Chain:

      It can be argued that Array is a child of its parent type Object.

      Object.prototype is Object, but not because Object is inherited from Object. This is simply because the prototype itself is just an object: they co-exist. 

      You can think of this as Object’s prototype being null, because it’s the top-level object on the prototype chain. In other words Object does not have an abstract prototype. Object does have a ”ghost” prototype object just like any other type.

     **Example:**
     ```javascript 
        function Person() {
            this.name = 'Messi'
        }
        // adding property
        Person.prototype.name = 'Ronaldo';
        Person.prototype.age = 30;
        const person1 = new Person();
        console.log(person1.name); //Messi
        console.log(person1.age);     //30
     ```   
     In the above program, a property name is declared in the constructor function and also in the prototype property of the constructor function.

      When the program executes, person1.name looks in the constructor function to see if there is a property named name. Since the constructor function has the name property with value 'John', the object takes value from that property.

      When the program executes, person1.age looks in the constructor function to see if there is a property named age. Since the constructor function doesn't have age property, the program looks into the prototype object of the constructor function and the object inherits property from the prototype object.

  - ### Method look-up:

     When you call Array.toString() what actually happens is, JavaScript will first look for method toString on the prototype of Array object. But it does not find it there. Next, JavaScript decides to look for toString method on the prototype property of Array’s parent class: Object.

      It finally finds Object.prototype.toString() and executes it.

     **Example:**
     ```javascript
        let x=[1,2,3];
        //print the x
        console.log(x);                           //[1,2,3]
        console.log(x.length);               //3   
        console.log(x[0])                       //1
        //convert x array value to string
        console.log(x.toString());           // 1,2,3
        //use forEach method
        x.forEach(item=>console.log(item));  
     ```   
     **console output:**
     ```
        [1, 2, 3]
        3
        1
        0: 1
        1: 2
        2: 3
        length: 3
        [[Prototype]]: Array(0)
        at: ƒ at()
        concat: ƒ concat()
        constructor: ƒ Array()
        copyWithin: ƒ copyWithin()
        entries: ƒ entries()
        every: ƒ every()
        fill: ƒ fill()
        filter: ƒ filter()
        find: ƒ find()
        findIndex: ƒ findIndex()
        flat: ƒ flat()
        flatMap: ƒ flatMap()
        forEach: ƒ forEach()
        includes: ƒ includes()
        indexOf: ƒ indexOf()
        join: ƒ join()
        keys: ƒ keys()
        lastIndexOf: ƒ lastIndexOf()
        length: 0
        map: ƒ map()
        pop: ƒ pop()
        push: ƒ push()
        reduce: ƒ reduce()
        reduceRight: ƒ reduceRight()
        reverse: ƒ reverse()
        shift: ƒ shift()
        slice: ƒ slice()
        some: ƒ some()
        sort: ƒ sort()
        splice: ƒ splice()
        toLocaleString: ƒ toLocaleString()
        toString: ƒ toString()
        unshift: ƒ unshift()
        values: ƒ values()
        Symbol(Symbol.iterator): ƒ values()
        Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
        [[Prototype]]: Object
        constructor: ƒ Object()
        hasOwnProperty: ƒ hasOwnProperty()
        isPrototypeOf: ƒ isPrototypeOf()
        propertyIsEnumerable: ƒ propertyIsEnumerable()
        toLocaleString: ƒ toLocaleString()
        toString: ƒ toString()
        valueOf: ƒ valueOf()
        __defineGetter__: ƒ __defineGetter__()
        __defineSetter__: ƒ __defineSetter__()
        __lookupGetter__: ƒ __lookupGetter__()
        __lookupSetter__: ƒ __lookupSetter__()
        get __proto__: ƒ __proto__()
        set __proto__: ƒ __proto__()
        1,2,3
        1
        2
        3
     ```  
  - ### Array methods:

     In previous section we’ve taken a look at prototype chain and how .toString method is found by traversing the prototype chain. But .toString is available on all objects that stem from the Object type (which is most built-in types.)

     The same is true for Number, String and Boolean built-in types. You can call toString method on each one of them, and yet it exists only in one place in memory on Object.prototype property. 

     Methods native to Array type should exist on Array.prototype object.

     It is obvious that there isn’t much use in having higher-order functions like .map, .filter and .reduce attached to Number or Boolean types. 

     The fact is, every single Array method already exists on Array.prototype:

     **Example:**
     ```javascript
        var x=[1,2,3,4,5];
        //print the array
        console.log(x);

        //filter method
        var result=x.filter(even);
        display(result);

        //reduce method
        result=x.reduce((acc,val)=>acc+=val);
        display(result);

        //map method
        result=x.map(square);
        display(result);

        //even function
        function even(value){
            if(value%2==0)
            return value; 
        }

        //square function
        function square(value){
            return value*value; 
        }

        //display the result
        function display(r){
            console.log(result);
        }
     ```   
     **Console output:**
     ```
        [1,2,3,4,5]
        0: 1
        1: 2
        2: 3
        3: 4
        4: 5
        length: 5
        [[Prototype]]: Array(0)
        at: ƒ at()
        concat: ƒ concat()
        constructor: ƒ Array()
        copyWithin: ƒ copyWithin()
        entries: ƒ entries()
        every: ƒ every()
        fill: ƒ fill()
        filter: ƒ filter()
        find: ƒ find()
        findIndex: ƒ findIndex()
        flat: ƒ flat()
        flatMap: ƒ flatMap()
        forEach: ƒ forEach()
        includes: ƒ includes()
        indexOf: ƒ indexOf()
        join: ƒ join()
        keys: ƒ keys()
        lastIndexOf: ƒ lastIndexOf()
        length: 0
        map: ƒ map()
        pop: ƒ pop()
        push: ƒ push()
        reduce: ƒ reduce()
        reduceRight: ƒ reduceRight()
        reverse: ƒ reverse()
        shift: ƒ shift()
        slice: ƒ slice()
        some: ƒ some()
        sort: ƒ sort()
        splice: ƒ splice()
        toLocaleString: ƒ toLocaleString()
        toString: ƒ toString()
        unshift: ƒ unshift()
        values: ƒ values()
        Symbol(Symbol.iterator): ƒ values()
        Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
        [[Prototype]]: Object
        [2, 4]
        15
        [1, 4, 9, 16, 25]
      ```  
     If you want to extend functionality of the Array method specifically, attach a method to Array.prototype.my method.

   - ### Parenting:

     But how does Array, Number, etc. know that Object is its parent?

     That’s exactly what prototype inheritance is about: creating links between children and parent objects. Often this is referred to as prototype chain.

     Furthermore, it can be said that prototype structure provides some sort of imitation of ”traditional” (or ”classic”) class inheritance as seen in C++, which is one of the few truly object-oriented programming languages. (It actually supports all features that make a language to be considered object-oriented.)

   - ### Extending Your Own Objects:

     Number’s and Array’s parent is Object. This is great, but what if we want to extend our own object from another object?

      As we saw from the preceding diagrams proto getter is part of internal prototype implementation. It’s crucial for establishing the link, but we shouldn’t mess with it directly. For the same reason.

      JavaScript is a dynamically typed language, so you can try to create some object constructors and rewire the proto property on their prototype object to the ”parent”, but this is often considered to be a hack. In practical coding situation, you will actually never need to do anything like this. There is literally no software you would possibly be writing that modifies the internal function of prototype. 

     After EcmaScript 6 you are encouraged to create and extend classes using class and extends keywords and let JavaScript worry about prototype links.

   - ### constructor property:

     The constructor property of Object class points to Function:
     ```
         Object		->	constructor     =>       Function
     Function Object(){}    				    function Function(){}
     ```

     The constructor property of Function class points to Function.

     ```
        Function	->		constructor     =>       Function
      Function Function(){}    				    function Function(){}	
     ```

     This creates a circular dependency around the Function class.

     ```
     Object	         ->  constructor   =>     Function	      ->     constructor =>Function
     Function Object(){}    		       function Function(){}		     function Function(){}
     ```	

     Function.constructor is Function (circular.) But Object.constructor is also Function. This can imply that a class is constructed using a function. Yet, Function itself is a class. This is circular dependency.

  - ### Function:

     Function is the constructor of all object types.
     ```
        Object
        function Object(){}
        Function
        function Function(){}
        Array
        function  Array(){}     ->    constructor   =>             Function  
        String						     function  Function(){}
        function  String(){}
        Number
        function  Number(){}
        Custom
        function  Custom(){}
     ```   

  - ### Prototype In Practice:

     Understanding how prototype works is a gradual process. It might be a difficult task, considering JavaScript language has evolved over the years. To get a better idea of how it all works, we’ll start from the very beginning.

     We’ve already covered the theory behind prototype in the previous section of this chapter. In this section we will finally arrive at prototype in terms of how fits into the big picture when it comes to actually writing code.

      This section is a thorough walk-through that demonstrate different ways of working with objects. And what’s a better place to start than the object literal?

   - ### Object Literal:

     In this example cat object was defined using a simple object literal syntax. In some ways, under the hood JavaScript wires up all the prototype linking.

     Throughout the following sections of this chapter we will gradually update this example and build on it to finally arrive at how prototype can be useful to you as a JavaScript programmer.

     **Example:**
     ```javascript
        let cat={};
        cat.name="sam";
        cat.hunger=0;
        cat.energy=1;
        cat.state="idle";
     ```   
     We named our cat specimen sam, gave him 0 level of hunger and 1 unit of energy. Currently sam is in idle state. 
     ```javascript
        //sleep to restore energy
        cat.sleep = function(amount){
            this.state = "sleeping";
            console.log(`${this.name} is ${this.state}. `);
            this.energy += 1;
            this.hunger += 1;
        }

        //wake up
        cat.wakeup = function(){
            this.state = "idle";
            console.log(`${this.name} woke up. `);
        }

        //Eat until hunger is quenched
        cat.eat = function(amount){
            this.state = "eating";
            console.log(`${this.name} is ${this.state} ${amount} units of food.`);
            if(this.hunger -= amount <= 0)
                this.energy += amount;
            else
                this.wakeup();    
        }

        //Wandering depletes energy,
        //if necessary, sleep for 5 hours to restore energy
        cat.wander = function() {
            this.state = "wandering";
            console.log(`${this.name} is ${this.state}.`);
            if(--this.energy < 1)
            this.sleep(5);
        }
     ```
     Methods sleep, wakeup, eat and wander were added directly to the instance of the cat object. Each method has basic implementation that either restores or depletes cats energy.
     ```javascript
        cat.sleep();    //sam is sleeping.
        cat.wakeup();   //sam woke up.
        cat.eat();      //sam is eating undefined units of food.
        cat.wander();   //sam is wandering.
     ```
   - ### Using Function Constructor:

     Instead of creating a new object literal, we can place the same code inside a function called Cat to represent a global Cat class:

     **Example:**
     ```javascript
        function Cat( name, hunger, energy, state) {
            let cat = {};
            cat.name = name;
            cat.hunger = hunger;
            cat.energy = energy;
            cat.state = state;

            //cat sleep
            cat.sleep = function(amount){
                this.state = "sleeping";
                console.log(`${this.name} is ${this.state}. `);
                this.energy += 1;
                this.hunger += 1;
            }
            
            //wake up
            cat.wakeup = function(){
                this.state = "idle";
                console.log(`${this.name} woke up. `);
            }
            
            //Eat until hunger is quenched
            cat.eat = function(amount){
                this.state = "eating";
                console.log(`${this.name} is ${this.state} ${amount} units of food.`);
                if(this.hunger -= amount <= 0)
                    this.energy += amount;
                else
                    this.wakeup();    
            }
            
            //Wandering depletes energy,
            //if necessary, sleep for 5 hours to restore energy
            cat.wander = function() {
                this.state = "wandering";
                console.log(`${this.name} is ${this.state}.`);
                if(--this.energy < 1)
                this.sleep(5);
            }
            return cat;
        }
        function and returned the object using the return keyword.
        let sam = Cat ("sam", 10, 5, "idle");
        sam.sleep();                            //sam is sleeping.
        sam.eat(5);                             //sam is eating 5 units of food.
        sam.wander();                           //sam is wandering.
        sam.wakeup();                           //sam woke up. 

        let luna = Cat ("luna", 8, 3, "idle");
        luna.sleep();                           //luna is sleeping.
        luna.wander();                          //luna is wandering.
        luna.eat(5);                            //luna is eating 5 units of food.
        luna.wakeup();                          //luna woke up.
     ```   
     Now, saving space, we can create two separate cats: sam and luna.

  - ### Prototype:

     Branching out from previous example, we see a problem.

     All of the methods of sam and luna take twice as much space in memory. This is because we are still creating two object literals for each cat.

     And this is the problem prototype tries to solve. 

     Why don’t we take all of our methods and place them at a single location in memory instead?

     **Example:**
     ```javascript
        const prototype = {
            //cat sleep
            sleep(amount){
                this.state = "sleeping";
                console.log(`${this.name} is ${this.state}. `);
                this.energy += 1;
                this.hunger += 1;
            },
            //wake up
            wakeup(){
                this.state = "idle";
                console.log(`${this.name} woke up. `);
            },
            //Eat until hunger is quenched
            eat(amount){
                this.state = "eating";
                console.log(`${this.name} is ${this.state} ${amount} units of food.`);
                if(this.hunger -= amount <= 0)
                    this.energy += amount;
                else
                    this.wakeup();    
            },
            //Wandering depletes energy,
            //if necessary, sleep for 5 hours to restore energy
            wander() {
                this.state = "wandering";
                console.log(`${this.name} is ${this.state}.`);
                if(--this.energy < 1)
                this.sleep(5);
            }
        }
     ```   
     Now all of our neatly packaged methods share a single place in memory.

     Let’s go back to our Cat class implementation, and wire the methods from the above prototype object directly into each method on the object:

     ```javascript
        function Cat( name, hunger, energy, state) {
            let cat = {};
            cat.name = name;
            cat.hunger = hunger;
            cat.energy = energy;
            cat.state = state;

            cat.sleep=prototype.sleep;
            cat.wakeup=prototype.wakeup;
            cat.eat=prototype.eat;
            cat.wander=prototype.wander;
        
            return cat;
        }
        let sam = Cat ("sam", 10, 5, "idle");
        sam.sleep();                            //sam is sleeping.
        sam.wakeup();                           //sam woke up.
        sam.eat(5);                             //sam is eating 5 units of food.
        sam.wander();                           //sam is wandering.
        let luna = Cat ("luna", 8, 3, "idle");
        luna.sleep();                           //luna is sleeping.
        luna.wakeup();                          //luna woke up.
        luna.wander();                          //luna is wandering.
        luna.eat(5);                            //luna is eating 5 units of food.
     ```   
  - ### Creating objects using Object.create:

     In JavaScript we can also create objects using Object.create method, which takes a clean slate object as one of its arguments:

     **Example:**
     ```javascript
        const cat = {
            name: "Felix",
            state: "idle",
            hunger: 1,
        }
        const kitten = Object.create(cat);
        kitten.name = "Luna";
        kitten.state = "sleeping";
     ```   
     Now let’s take a look at kitten:
     ```javascript
      console.log(kitten);
     ```
     Mysteriously, object kitten has only two methods – it is missing hunger property

     **Console output:**
     ```
     {name: 'Luna', state: 'sleeping'}
     ```
     ```javascript
        console.log(kitten.name);     //Luna
        console.log(kitten.state);      //sleeping
     ```   
     To explain this, let’s see what will happen if we actually try to output it:
     ```javascript
       console.log(kitten.hunger);   //1
     ```  
     **Console output:**
     ```
      1
     ```
     But wait, the console is telling us hunger actually exists. What’s going on here?

     This behavior is unique to objects created via Object.create method. When we try to get kitten.hunger, JavaScript will look at kitten.hunger, but will not find it there (because it wasn’t created directly on the instance of the kitten object.) 

     Then what happens is JavaScript will look at .hunger property in cat object. Because kitten was created via Object.create(cat), kitten considers cat to be its parent so it looks there. 

     Finally it finds it on cat.hunger and returns 1 in console. Again, property hunger is stored only once in memory.

   - ### Back To The Future:

     Let’s rewind a bit and go back to the earlier example from section called Using Function Constructor fully equipped with new knowledge about Object.create.

     **Example:**
     ```javascript
        const prototype = {
            //cat sleep
            sleep(amount){
                this.state = "sleeping";
                console.log(`${this.name} is ${this.state}. `);
                this.energy += 1;
                this.hunger += 1;
            }
        }

        function Cat(name, hunger, energy, state){
            let cat = Object.create(prototype);
            cat.name = name;
            cat.hunger = hunger;
            cat.energy = energy;
            cat.state = state;
            //we no longer need them here
            //cat.sleep = prototype.sleep;
            //cat.wakeup = prototype.wakeup;
            //cat.eat = prototype.eat;
            //cat.wander = prototype.wander;
            return cat;
        }
     ```   
     Let’s delete the part where we wired our own prototype object into the methods of Cat class, and instead pass them into the native Object.create method which will now reside inside our Cat function (source code listing above.)

      Now we can create felix and luna via this new Cat function as follows:
      ```javascript
        let felix = Cat("Felix", 10, 5, "idle");
        felix.sleep();  //felix is sleeping.
        let luna = Cat("luna", 8, 3, "idle");
        luna.sleep();   //luna is sleeping.
      ```  
     Now we get the ideal syntax, and sleep() is defined only once in memory. No matter how many felixes or lunas you create, we’re no longer wasting memory on their methods, because they are defined only once.

  - ### Constructor Function:

     Let’s recall that each Object has a prototype property pointing to its ghost prototype object

     **Example:**
     ```javascript
     console.log(typeof Object.prototype);   //object
     ```
     So now what we can do is attach all Cat methods directly to its built-in prototype property instead of our own ”prototype” object we created earlier:

     **Example:**
     ```javascript
        function Cat(name, hunger, energy, state){
            let cat = Object.create(Cat.prototype);
            cat.name = name;
            cat.hunger = hunger;
            cat.energy = energy;
            cat.state = state;
            return cat;
        }
        // now define methods on actual Cat.prototype object
        Cat.prototype.sleep = function (){
                this.state = "sleeping";
                console.log(`${this.name} is ${this.state}. `);
                this.energy += 1;
                this.hunger += 1;
        }
        Cat.prototype.wakeup = function (){
            this.state = "idle";
            console.log(`${this.name} woke up. `);
        }
        Cat.prototype.eat = function (){}
        Cat.prototype.wander = function (){}

        let luna = Cat("Luna",5, 1, "sleeping");
        felix.wakeup();     //Luna is sleeping
      ```  
     In this scenario, JavaScript will look for .sleep on luna object, and will not find it there. It will then look for .sleep method on Cat.prototype. It finds it there and the method is invoked.
     ```javascript
        let felix = Cat("Fleix",5, 1, "sleeping");
        felix.wakeup();    //Felix woke up
     ```   
     The same happens here, .wakeup method is executed on Cat.prototype.wakeup, not on the instance itself. 

     Therefore the main purpose of prototype is to serve as a special look up object, which will be shared across all instances of objects instantiated with its constructor function while preserving memory.

   - ### Along came new operator:

     We can wipe out everything we learned up to this point and replace it all with new operator – which will automatically do every single thing we’ve just explored in the previous sections of this chapter!

     **Example:**
     ```javascript
        Cat.prototype.sleep = function (){
            this.state = "sleeping";
            console.log(`${this.name} is ${this.state}. `);
            this.energy += 1;
            this.hunger += 1;
        }
        Cat.prototype.wakeup = function (){
        this.state = "idle";
        console.log(`${this.name} woke up. `);
        }
        Cat.prototype.eat = function (){}
        Cat.prototype.wander = function (){}
        function Cat(name, hunger, energy, state){
            let cat = Object.create(Cat.prototype);
            cat.name = name;
            cat.hunger = hunger;
            cat.energy = energy;
            cat.state = state;
            return cat;
        }
        let luna =new Cat("Luna",5, 1, "sleeping");
        luna.sleep();
        let felix =new Cat("Fleix",5, 1, "sleeping");
        felix.wakeup();
     ```   
  - ### The class keyword:

     Everything we’ve just explored about prototype was converging toward the class keyword added in EcmaScript 6.

     How prototype works is a common subject during JavaScript interviews. But in production environment, you will never (spelling is correct) have to touch it at all in your entire career as a front-end software engineer.

     **Example:**
     ```javascript
        class Cat{
        constructor(name, hunger, energy, state){
            this.name = name;
            this.hunger = hunger;
            this.energy = energy;
            this.state = state;
        }
        }
        Cat.prototype.sleep = function (){
            this.state = "sleeping";
            console.log(`${this.name} is ${this.state}. `);
            this.energy += 1;
            this.hunger += 1;
        }
        Cat.prototype.wakeup = function (){
        this.state = "idle";
        console.log(`${this.name} woke up. `);
        }
        Cat.prototype.eat = function (){}
        Cat.prototype.wander = function (){}
      ```  
     Use class and new keywords. Let JavaScript worry about prototype:
     ```javascript
        let luna =new Cat("Luna",5, 1, "sleeping");
        luna.sleep();
        let felix =new Cat("Fleix",5, 1, "sleeping");
        felix.wakeup();
     ```  
     In the next section we will take this concept further to design an entire application using OOP: Polymorphism with examples via Inheritance and Object Composition and just a bit of Functional Programming style.

## 18 Object Oriented Programming
 - ### Polymorphism:

     The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects.

     polymorphism is demonstrated via object composition by integrating an Oven object directly into the Range object. Object Composition is when you combine two or more objects together to achieve polymorphism, instead of using inheritance. 

     **Example:**
     ```javascript
        class FirstClass{
            constructor(id, name){
                this.id = id; 
                this.name = name;
            }
            display1() {  
            console.log("First Class is invoked");  
            }   
        } 
        class SecondClass extends firstClass { 
            display2(){
                console.log(this.id+" and "+this.name);  
            } 
        }  
        var result=new secondClass(100,"yuvaraj");  
        result.display1();     // First Class is invoked
     ```
  - ### Class Definitions:

     Programming in general can be split into two parts: defining things and using them.

     In JavaScript, classes are the special type of functions. We can define the class just like function declarations and function expressions.

     The JavaScript class contains various class members within a body including methods or constructor. The class is executed in strict mode. So, the code containing the silent error or mistake throws an error.

     The class syntax contains two components:

     Class declarations

     Class expressions

     **Example:**
     ```javascript
        // creating a class
        class Person {
            constructor(name) {
            this.name = name;
            }
        }
        
        // creating an object
        const person1 = new Person('John');
        const person2 = new Person('Jack');
        
        console.log(person1.name); // John
        console.log(person2.name); // Jack
     ```   
     The `class` keyword is used to create a class. The properties are assigned in a constructor function.

     Here, person1 and person2 are objects of Person class.

      The constructor() method inside a class gets called automatically each time an object is created.

   - ### Inheritance:

      To create a class inheritance, use the extends keyword.

      A class created with a class inheritance inherits all the methods from another class.

      Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

     **Example: (inheritance in calss)**
     ```javascript
        class Car {
            constructor(brand) {
            this.carname = brand;
            }
            present() {
            return 'I have a ' + this.carname;
            }
        }
        
        class Model extends Car {
            constructor(brand, mod) {
            super(brand);
            this.model = mod;
            }
            show() {
            return this.present() + ', it is a ' + this.model;
            }
        }
        let myCar = new Model("Ford", "Mustang");
        console.log(myCar.show());   
     ```
 - ### inheritance in prototype:

     The default inheritance in javascript is prototype.

     **example:**
     ```javascript
        let animal = {
        eats: true,
        walk() {
            console.log("Animal walk");
        }
        };

        let rabbit = {
        jumps: true,
        __proto__: animal
        };

        // walk is taken from the prototype
        rabbit.walk(); // Animal walk
     ```
## 19 Events

   Events are functions executed at the time when a specific action occurs. For example, if user clicks on a UI button or any other HTML element, browser dispatches an ”onclick” event associated with HTML element that was clicked. 

   There are two types of events: browser events and synthetic events.

  - ### Browser Events:

      Built-in browser events are already pre-determined and executed by the browser when an action occurs. You don’t need to create them yourself, only to intercept them – if you wish something else to happen after they occur.

      When browser window changes size, a resize event is automatically dispatched. This might be a good place to adjust your UI layout to the new area.

      Mouse events are also an example of built-in browser events. When a mouse is moving onmousemove event is dispatched, continuously re-calculating mouse position and exposing them via event.clientX and event.clientY property names. 

      When the mouse button is pressed down onmousedown event is dispatched and when it is released onmouseup event will occur. You can intercept these events and supply a callback function that contains commands you want to be executed after the event occurs. This is incredibly useful for implementing custom UI experience: for example, display a custom menu when a mouse button is clicked.

   - ### Synthetic Events:

      Built-in browser events are nice, but to truly understand how they work, we’ll start with synthetic events. This will give us a good idea of how events are created and dispatched in JavaScript.

      - ### Event Object

          The document.addEventListener() method attaches an event handler to the document.

          You can create and dispatch your own events using Event object. Events created in this way are called synthetic events because they are not generated by the browser itself, but rather by your program. Let’s create a synthetic event just to see how events work in JavaScript at their basic level:

          **Example:**
          ```javascript
            //create a new custom event  “start”
            let startEvent = new Event("start");
          ```  
         Now that the startEvent is created we need a way to intercept it and run some code when it is detected. First step to begin listening for the ”start” is to call addEventListener method with ”start” as first argument:
         ```javascript
            //listen for the "start" event
            document.addEventListener("start",function(event){console.log(event)},false);
         ```   
         The anonymous callback function will be executed when the event occurs. It takes one parameter called event. You can name this parameter anything you want but event is usually ideal to avoid confusion.

       - ### Event Capture And Event Bubbling:

          The last parameter useCapture is set to false to disable event capture mode. Basically when it’s set to true it means the parent element will be notified of the event first, and only then the element that was actually clicked. If it is set to false, ”event bubbling” will be used, which means the opposite: first, the clicked element will be notified of the event, and then the event will be dispatched progressively to all of its parents.

          The story goes way back to implementation in the Netscape Navigator browser and initial versions of Internet Explorer.

          Long story short, Netscape wanted to enforce event capture. And Internet Explorer wanted to enforce event bubbling. The final consensus was to use both.

         Since that time addEventListener function will actually listen to both capture and bubbling. But the last parameter useCapture allows the programmer to make a choice for which event propagation method should take precedence:
         ```
         button>div>body   in capture    
         body>div>button    in   bubbling
         ```
          In modern browsers, the useCapture parameter defaults to false if it’s not specified, but older browsers require this flag to be set manually. So in modern JavaScript it is usually explicitly set to false but only for backwards-compatibility.

       - ### dispatchEvent:

          Once addEventListener function is executed, the browser will be continuously listening for the ”start” event to occur. But the callback remains dormant until event is actually dispatched using the dispatchEvent method:

         **Example:**
         ```javascript
            //dispatch the “start” event
            document.dispatchEvent(startEvent);
         ```   
         The dispatchEvent method actually triggers our custom ”start” event. It usually takes one argument: the variable pointing to the actual event object created earlier.

      - ### removeEventListener:

          The document.removeEventListener() method removes an event handler that has been attached with the document.addEventListener() method.

          Event listeners take memory and can affect performance of your program if there are too many listeners running at the same time. If we no longer need to listen for the event it’s a good idea to call removeEventListener method.

           Let’s say we started to listen for ”click” event on document:

         **Example:**
         ```javascript
            var clicked = function(){
                console.log("Document is clicked.")
            }
            document.addEventListener("click",clicked);
         ```   
         To remove this event listener we must also provide the same callback function that was originally passed to the addEventListener method above:

         **Example:**
         ```javascript
           document.removeEventListener("click",clicked);
         ```  
          Anonymous functions cannot be used to remove event listeners, so the following call will not remove the event listener:
          ```javascript
            document.removeEventListener("click",function(){ });
          ```  
         Whenever you use an anonymous function expression, it will occupy a new location in memory. This means removeEventListener will not be able to locate it among already existing callbacks. 

          The original callback function name is required because it is located at a unique location in memory. That’s what essentially lets removeEventListener method know exactly which listener to unbind. 

         Note removeEventListener(”click”) will not remove ”all click events”. Again, you must specify original function name that was used to attach the event as the second argument of removeEventListener to successfully unbind the event.

       - ### CustomEvent Object:

          Events can carry additional data, specifying details of the event. For example, if a mouse is clicked, we need to know the X and Y location of the mouse pointer at that time. If browser was resized, we need to know the size of the new client area. 

          In order to add detail to the event the CustomEvent object should be used. 

          But first, let’s create the payload object. This object must have a property named detail which will store additional information about our custom event – indicating that a pin was placed on a map with position and an info label:

         **Example:**
         ```javascript
            //create event details payload
            let info = { detail: {position:[125, 210],info:"map location"} };
         ```   
         Now, let’s create our new custom ”pin” event:
         ```javascript
            //create new event of custom type "pin"
            let eventPin = new CustomEvent("pin", info);
         ```   
         This callback function will be triggered when the event is dispatched:
         ```javascript
            //create callback
            let callback = function(event){ console.log(event);};
         ```   
         Finally, start listening for the ”pin” event:
         ```javascript
            //start listening for pin event
            document.addEventListener("pin",callback);
         ```   
          The custom event is dispatched in exactly the same way as a regular event, by calling the dispatchEvent method.

         Whenever someone clicked a mouse button on the map area, you can dispatch the ”pin” event using the dispatchEvent method:
         ```javascript
            //manualy dispatch the event1
            document.dispatchEvent(eventPin);
         ```   
 - ### Event Anatomy:

     Let’s take a look at the CustomEvent in console. Important parts were highlighted:
     ```javascript
        CustomEvent {isTrusted: false, detail: {…}, type: 'pin', target: document, currentTarget: document, …}
        bubbles: false
        cancelBubble: false
        cancelable: false
        composed: false
        currentTarget: null
        defaultPrevented: false
        detail: {position: Array(2), info: 'map location'}		//CustomEvent.detail
        eventPhase: 0
        isTrusted: false
        path: (2) [document, Window]     			  // propatagion path
        returnValue: true
        srcElement: document
        target: document					// target element
        timeStamp: 1317
        type: "pin"						//custom event name
        [[Prototype]]: CustomEvent
        true
      ```  
      - ### Final Words

         Event objects are abstract. Each event usually carries details that are relevant to event type. So when designing your own events, think about what type of data it should provide. This is usually specific to the purpose of your program.

  - ### setTimeout:

       You can time events using setTimeout function.

       The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

       Create callback:
       ```javascript
          let callback = function(){ console.log("event!")};
       ``` 

      Execute the callback 1 second (1000 milliseconds) after setTimeout is called:
      ```javascript
        setTimeout(callback,1000);
      ```  
      Let’s try something else:
      ```javascript
       callback = function(){ console.log("do something")};
      ``` 
      Execute callback 1 second in the future:
      ```javascript
        let timer = setTimeout(callback, 1000);
      ```  
      Resetting the timeout using clearTimeout function will cancel the event and prevent it from occurring in the future:
      ```javascript
        //reset timeout
        clearTimeout(timer);
        timer = null;
      ```  
  - ### setInterval:

       The setInterval function works exactly like setTimeout, except it will continue executing the callback function for an indefinite number of times at a time interval specified as its second argument:
       ```javascript
        //create callback
        let callback = function(){ console.log("event!")};
        let interval = setInterval(callback, 1000);
       ``` 
       To stop the events, you can use clearInterval function
       ```javascript
        //reset interval
        clearInterval(interval);
        interval = null;
       ``` 
  - ### Intercepting Browser Events

       Many built-in events already have callback functions attached to global window object. This means you can override them by providing your own version:

      **Example:**
      ```javascript
        window.onload = function() { }
        window.onresize = function() { }
        window.focus = function() { }
        window.onmousemove = function() { }
        window.onmouseover = function() { }
        window.onmouseout = function() { }
     ```   
      The events will still take place, but the function you attach to their name will be executed in addition to the built-in code.

      But window object is not the only place where events can be overwritten. For example, it is possible to attach events directly to HTML elements. And if the selected element supports a particular event type, it will be overwritten:

      ```javascript
        document.getElementById("id").onclick = function(event){
            console.log(event);
        }
      ```  
  - ### Display Mouse Position

     To display where the mouse pointer is located within an element, or relative to the entire page, you can intercept the onmousemove event and output mouse position coordinates 1attached to event argument:

     **Example:**
     ```javascript
        window.onmousemove = function(event){
            //get mouse coordinates relative to the document
            let mouseX = event.pageX;
            let mouseY = event.pageY;
            //get mouse coordinates relative to element area
            let localX = event.clientX;
            let localY = event.clientY;
            console.log(localX, localY, mouseX, mouseY);
        }
     ```   
     In the console we will observe similar output to:
     ```
        118 261 118 261
        107 254 107 254
        98 248 98 248
     ```

      The click event, and many others, can be overwritten as follows:

     **Example:**
     ```javascript
        window.onclick = function(event){
            //get mouse coordinates relative to the document
            let mouseX = event.pageX;
            let mouseY = event.pageY;
            //get mouse coordinates relative to element area
            let localX = event.clientX;
            let localY = event.clientY;
            console.log(localX, localY, mouseX, mouseY);
        }
      ```  
  - ### Universal Mouse Event Class:

      I can’t count how many times I had to write mouse code all over again every time a new project required custom UI functionality. While simply intercepting common mouse movement and click events is enough to track when buttons are clicked, common UI projects require calculations not provided by built-in mouse events.

       Custom modules you might want to write require knowing things like: ”Is the user currently dragging an object with a mouse?” If you are working on a slider UI, you will most definitely need to answer the question: ”What is the distance between last mouse click and current mouse position?” 

       In this section we will write a reusable Mouse class that will put an end on ever having to write mouse code again in your future JavaScript projects: just export Mouse class from mouse.js file, and you’re ready to go.

      **Example:**
      ```javascript
        export class Mouse{
            constructor(){
                this.current = {x:0, y:0};      //current coordinates
                this.memory = {x:0 ,y:0};       //last click position
                this.difference = {x:0 ,y:0};   //difference
                this.inverse = {x:0 ,y:0};      //swapped
                this.dragging = false;
                document.body.addEventListener("mousedown", ()=>{
                    if(this.dragging == false){
                        this.dragging = true;
                        this.memory.x = this.current.x;
                        this.memory.y = this.current.y;
                        this.inverse.x = this.memory.x;
                        this.inverse.y = this.memory.y;
                    }
                });
                document.body.addEventListener("mouseup", ()=>{
                        this.dragging == false;
                        this.current.x = 0;
                        this.current.y = 0;
                        this.memory.x = 0;
                        this.memory.y = 0;
                        this.difference.x = 0;
                        this.difference.y = 0;
                        this.inverse.x = 0;
                        this.inverse.y = 0;
                });
                document.body.addEventListener("mousemove",(event)=>{
                    this.current.x = event.pageX;
                    this.current.y = event.pageY;
                    if(this.dragging){
                        this.difference.x < this.current.x - this.memory.x;
                        this.difference.y < this.current.y - this.memory.y;
                        //calculate inverse
                        if(this.current.x < this.memory.x)
                        this.inverse.x = this.current.x;
                        if(this.current.y < this.memory.y)
                        this.inverse.y = this.current.y;   
                    }
                });
            }
        }
      ```  
  - ### Including And Using Mouse Class:

      Just store this code in mouse.js and every time you need to work with mouse coordinates, instantiate the Mouse class as shown in the next code sample:

      **Example:**
      ```javascript
        <html>
            <head>
                <title>Custom UI Project</title>
                <script type = "module">
                    import {Mouse} from "./mouse.js";
                    //Instantiate global mouse object
                    let mouse = new Mouse();
                    //Ready to use globally in your code
                    mouse.current.x;
                    mouse.current.y;
                    //Last clicked position, relative to document
                    mouse.memory.x;
                    mouse.memory.y;
                    //Drag length
                    mouse.difference.x;
                    mouse.difference.y;
                    //inverse
                    mouse.inverse.x;
                    mouse.inverse.y;
                    //Is mouse button currently held down?(boolean)
                    mouse.dragging;
                </script>
            </head>
            <body></body>
        </html>
      ```  
   - ### Mouse Class Explained

      From now on, all coordinates we might need are automatically calculated and available on the instance of the Mouse class.

       The mouse.memory property holds the position where the mouse was clicked last time. If user is still holding the mouse button down, which is tracked by the boolean mouse.dragging variable, then mouse.difference property will contain distance between the previous click and where the mouse pointer is currently located.

       This is useful for tracking distance of a custom scrollbar, or similar slider UIs. If the mouse is hovering over the slider handle area and user clicks the mouse button, and the mouse button remains pressed down, then the slider should move the same amount of distance specified in difference.x or difference.y property, depending on whether the slider is horizontal or vertical. 

      When mouse button is released, all properties are reset to 0 again.

      A bit more can be said about mouse.difference property when it’s negative. If the mouse is used to ”draw” a rectangle on the screen, but the vector cast from previous click location is negative, then mouse.inverse property will contain the upper left corner of the rectangle. If the distance vector is positive, then the upper left corner will be naturally stored in mouse.memory.

 ## 20 Network Requests

   Applications dealing with back-end code often communicate via HTTP requests. In this section we will explore several different methods.

   One of the first and simplest ways of initiating an HTTP request is by creating an instance of the XMLHttpRequest object:

  **example:**
   ```javascript
    const Http = new XMLHttpRequest();
   ``` 
   This object has methods open and send. But before calling them, we need to define an endpoint URL. In this example, let’s simply download the source code of jQuery library from a CDN location. But it can be any other type of file:
   ```javascript
    const url = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
   ```   
   Now we can call the URL with either ”GET” or ”POST” method:
  ```javascript
  Http.open("GET",url);
  Http.send();
  ```

   To get the actual value returned from the URL endpoint, we need to listen to ”state change” event which will be executed soon as the content is returned:
   ```javascript
    //http request response callback
    Http.onreadystatechange = function(event){
        //print content 
        console.log(Http,Http.responceText);
    }
  ```

   You can create an HTTP request to fetch almost any type of data. It doesn’t have to be jQuery library. Usually an API you are connecting to will pack the return value into a JSON object containing a list of items, ready for parsing by your application and displaying in the UI view.

   This is usually done in production code as shown in next example:
   ```javascript
    const Http = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    //execute request
    Http.open("GET",url);
    Http.send();
    //http request response callback
    Http.onreadystatechange = function(event){
        //check for successful request status:
        if(this.readyState == 4 && this.status == 200){
            //Read content in json format:
            let json = JSON.parse(Http.responseText);
            console.log(Http);
            console.log(json);
            //extract properties from object
            let id = json.id;
            let name = json.name;
            //update application view with received data
            let userId = document.getElementById("id");
            if(userId) userId.innerHTML = id;
            let userName = document.getElementById("name");
            if(userName) userName.innerHTML = name;  
        }
    };
   ``` 
   When an HTTP request is executed using open and send methods, the onreadystatechange event will actually be fired 4 times, each with state changing from 1 to 2 to 3 and finally to 4. We are only concerned with final stage 4, at which point the request will be considered completed and return 200 status.

   It is important to check for this.status == 200. Because this is the only place where we can be sure that the event completed successfully.

   Next, we retrieve contents of object.js file, which is the JSON object shown above, in string format. But we need to convert it to an actual JavaScript object. This is done via JSON.parse method.

   We then store individual properties json.id and json.name in variables id and name respectively.

   Finally, the id and name are displayed in the UI of the app. This could be two div containers prepared to store this data.

   If multiple JSON objects are received, you should probably convert them to an array (using Object.entries method) and iterate through them using .forEach, .map or other higher-order functions. 

   In this case object.js could include multiple objects separated by comma:
   ```
        [
            {
                "id":7,
                "name":"dhoni"
            },
            {
                "id":10,
                "name":"sachin"
            },
            {
                "id":18,
                "name":"kohli"
            }
        ]
   ```
  - ### Callback Hell:

     Callbacks are functions that return after an event is executed. This way we can write in our custom code, wrap up loading animations, and do clean up. 

     For a long time, before EcmaScript 6, callbacks were extensively used as a tool to execute asynchronous calls. As applications grew more complex, multiple callbacks were chained up together because each call relied on completion of a previous task:

      - ### Sailor API

          You can’t build a boat until you fetch some wood. You can’t sail the ocean until the boat is built. You can’t discover an island until you can sail the ocean. Certainly, you can’t dig for treasure without exploring an island!

          Let’s take a look at how imaginary Sailor API could be used to achieve a series of actions that depend on each other.

         **Example:**
         ```javascript
            SailorAPI("/get/wood",(result) =>{
                SailorAPI("/build/boat/",(result) =>{
                    SailorAPI("/sail/ocean",(result) =>{
                        SailorAPI("/explore/island",(result) =>{
                            SailorAPI("/treasure/dig",(result) =>{
                            //asynchronous code 
                            //with dependencies is ugly!
                            });
                        });
                    });
                });
            });
          ```  
         A series of calls written this way share the problem of dependency. In addition, a large gap of time can be created between each call, if at least one of the API calls lags, significantly slowing down the entire process. Wasn’t asynchronous code supposed to happen at the same time? 

         Besides, inside each callback we must manually check whether the previous request returned successfully. This produces code that looks complicated and hard to read.

 - ### Promises:

     Using just callbacks in some situations where one event depends on results returned from another event might result in complicated code.

     A Promise object provides a pattern for checking whether an action fails or succeeds. Then, if it does succeed, it returns another promise.

     The Promise object takes two parameters: resolve and reject:

     **Example:**
     ```javascript
        let password = "felix";
        let p = new Promise((resolve,reject) => {
            if(password != "mathilda")
            return reject("invalid password");
            resolve();   
        });
      ```  
     **Output:**
     ```
      Uncaught (in promise) invalid password
     ``` 
      The internal logic of a promise is entirely up to you. 

      If you are validating a password, as in above example, you will determine whether to call the resolve or reject command. Let’s take at resolve and reject individually before putting together a complete promise.

  - ### Promise.resolve:

     The resolve method indicates that the promise has been successfully fulfilled and contains the return value. For example, it can be a string:
     ```javascript
      let promise = Promise.resolve("message");
     ``` 
      In the same way, the following promise is resolved to ”resolve value”, which technically can be a string, number, or even another promise:
      ```javascript
        let promise = Promise.resolve("resolve value");
      ```  
     The then method intercepts the value in the event of successful outcome as a response to resolve method. In the next example then method is used to intercept ”resolve value” message.

  - ### .then :

     The then method receives the resolve value:

     **Example:**
     ```javascript
        //resolves to "message"
        let promise = Promise.resolve("message");
        //.then() method receives resolve value
        promise.then(function(message){
            console.log("then :" +message);
        });
     ```   
     **Console output:**
     ```
        then :message
        Promise {<fulfilled>: undefined}
     ```
   - ### .catch:
     The catch method responds only to reject method. In this example, it will not even be executed because all we did was call resolve method by itself. Bu**t it’s possible to attach a callback to it to catch errors later:

     **Example 1:**
     ```javascript
        //resolves to "message"
        let promise = Promise.resolve("message");
        //.then() method receives resolve value
        promise.then(function(message){
            console.log("then :" +message);
        });
        //never called, because we used .resolve method
        promise.catch(function(error){
            console.log("catch :" +error);
        });
     ```   
     **Console output:**
     ```
        then :message
        Promise {<fulfilled>: 'message'}
     ```   
     **Example 2:**
     ```javascript
        let password = "felix";
        let p = new Promise((resolve,reject) => {
            if(password != "mathilda")
                reject("invalid password"); 
            resolve("correct password");   
        });
        p.then(function(msg){
            console.log("then : " + msg);
        });
        p.catch(function(err) {
            console.log("catch : "+err);
        });
     ```   
     **console output:**
     ```
        catch : invalid password
        Promise {<fulfilled>: undefined}
        Uncaught (in promise) invalid password
     ```   
  - ### .finally

     The finally method is executed regardless of whether event succeeded with resolve method or failed with reject method. It is a good place for cleaning up the code  or update the UI view (for example hide the loading animation):

     **Example:**
     ```javascript
        let password = "felix";
        let p = new Promise((resolve,reject) => {
            if(password != "mathilda")
                reject("invalid password"); 
            resolve("correct password");   
        });
        p.then(function(msg){
            console.log("then : " + msg);
        });
        p.catch(function(err) {
            console.log("catch : "+err);
        });
        p.finally(function(){
            console.log("finally : hide loading animation");
        });
     ```   
     **Console output:**
     ```
        catch : invalid password
        finally : hide loading animation
        Promise {<rejected>: 'invalid password'}
        Uncaught (in promise) invalid password
        Uncaught (in promise) invalid password
     ```  
  - ### Promise.reject:
   
      But what happens in cases when a condition isn’t met and the promise is rejected?

     **Example:**
     ```javascript
        //reject to "request rejected"
        let promise = Promise.reject("Request rejected");
        //.then() method receives resolve value
        promise.then(function(message){
            console.log("then :" +message);
        });
        //.cathch method receives reject value
        promise.catch(function(error){
            console.log("catch :" +error);
        });
     ```   
     Here we paired a reject method with catch. The then method is never called on reject action. But the finally method will be called to wrap things up:
     ```javascript
        //good place for post-promise data clean up
        promise.finally(function(){
            console.log("finally : hide loading animation");
        });
     ```   
     **Console output:**
     ```
        catch :Request rejected
        finally : hide loading animation
        Promise {<rejected>: 'Request rejected'}
        Uncaught (in promise) Request rejected
        Uncaught (in promise) Request rejected
      ```  
  - ### Putting It All Together
  
     Because a promise returns a promise object, we can write everything in a single statement:

     **Example:**
     ```javascript
        let promise = new Promise(function(resolve,reject) {
            let condition = true;
            if(condition)
                resolve("message");
            else       
                reject("error deails"); 
            
        }).then(function(msg){
            console.log("then : " + msg);
        }).catch(function(err) {
            console.log("catch : "+err);
        }).finally(()=>console.log("finally."));
     ```   
     **Console output:**
     ```
        then : message
        finally.
     ```   
      Here is another similar but slightly different pattern. If it makes the code cleaner, you might want to separate the promise call from then and catch calls:

     **Example:**
     ```javascript
        let takeTheTrashOut = new Promise((resolve, reject)=>{
            //do the work
            let trash_is_out = take_trash_out();
            //handle the return value
            if(!trash_is_out)
            reject("No");
            else
            resolve("Yes");  
        });
        //resolve Promise using then and catch methods
        takeTheTrashOut.then(function(fromResolve){
            console.log("Is the trash out? Answer = " +fromResolve);
        }).catch(function(fromReject){
            console.log("Is the trash out? Answer = " +fromReject);
        });
     ```   
  - ### Promise.all :

      Unlike an HTTP request, promises can resolve any statement – including simple variable values. Having said this, we can resolve multiple promises at once using a single call to the Promise.all method as shown in the following example:
     ```javascript
        var promise = "promise";
        var thread = "thread";
        var wish = Promise.resolve("I wish.");
        //data set
        var array = [promise, thread, wish];
        Promise.all(array).then(function(values){
            console.log(values); 					// ['promise', 'thread', 'I wish.']
        });
     ```   
  - ### Promise Anatomy :

  - ### Final Words :

     In many traditional cases, the following pattern is usually used:
     **Example:**
     ```javascript
        new Promise((resolve, reject) => {resolve("resolved.");})
        .then((msg) => {console.log(msg);})
        .catch((error) => {console.log(error);})
        .finally(() =>{console.log("finally.");});
     ```   
     **Console output:**
     ```
        resolved.
        finally.
        Promise {<fulfilled>: undefined}
     ```  
   - ### Axios :

     Axios is a popular Promise-based library for talking to the database.
     **Command:**
     ```
     npm  install  axios  --save
     ```
     Use the command above to install it on your Node server.

     Then, to include Axios directly into your JavaScript file:
     ```
       import axios from 'axios';
     ```  
      Or to embed it directly into your HTML page:
      ```html
         <script src = "https://unpkg.com/axios/dist/axios.min.js"></script>
      ```
      Now let’s say we have an endpoint /get/posts/:
      ```javascript
        const url = 'http://example.com/endpoint/get/posts';
        axios.get(url)
        .then(data => console.log(data))
        .catch(err => console.log(err));
      ```

      As you can see Axios follows the same Promise pattern we explored in previous section. Surprisingly, there isn’t much more to it. You can use Axios to provide an elegant solution for talking to an API. 

       The complete Axios documentation is available at https://github.com/axios/axios

  - ### Fetch API:

       The built-in fetch API offers another Promise-based interface for talking to a web server:

     **Example:**
     ```javascript
        let loading_animation = true;
        fetch(request).then(function(response){
            var type = response.headers.get("content-type");
            if(type && type.includes("application/json"))
                return response.json();
            throw new TypeError("content is not in JSON format.");    
        })
        .then(function(json){ console.log("handle json here"); })
        .catch(function(error){ console.log(error); })
        .finally(function(){ loading_animation = false; });
      ```  
  - ### Fetch POST Payload :

      When an application requires talking to a database server, you will find yourself sending and receiving data from an endpoint. An endpoint is simply a URL location that performs specific action. What it does is determined by the API server. It is often part of entire API that contains multiple endpoints.

      For example: /get/messages can be an endpoint that returns a JSON object containing messages.
       
      But requests come in two common flavors: POST and GET. And when using POST, we can attach a payload object to communicate detail. Let’s form POST request that grabs messages but only for user ”Felix” whose user ID is 12:

     **Example:**
     ```javascript
        const url = "http://example.com/endpoint/get/messages";
        const data = {name: "felix", id:12};
        const params = {
            headers: {
                "content-type": "application/json"
            },
            body: data,
            method: "POST"
        }
      ```  
     Form the request callback:
     ```javascript
        const callback = function(response){
            var type = response.headers.get("content-type");
            if(type && type.includes("application/json"))
                return response.json();
            throw new TypeError("content is not in JSON format.");        
        }
      ```  
     Finally call fetch method with URL and params:
     ```javascript
        fetch(url,params).then(callback)
        .then(function(json){ console.log("handle json here"+json); })
        .catch(function(error){ console.log(error); })
        .finally(function(){ loading_animation = false; });
     ```   
  - ### async / await:

      Promise-based code suffers from similar issues as regular callbacks. After all then, catch and finally are still basically callback functions. Promises just make code cleaner by segmenting the callbacks into generalized predictable results! 

      This means that there is still potential to end up in Promise Hell rather than Callback Hell by stacking callbacks. Promises provide a nice attempt at making the situation better. But code can be even more elegant than this with async.

     - ### The Basics Of async Keyword:

         First, let’s take a look at what exactly happens when we call two functions:

         **Example:**
         ```javascript
            function x(){}
            function y(){}
            x();
            y();
         ```   
         Function y() will be executed soon as function x() returns.

          This is exactly what you would expect from asynchronous code, which means code executes in a sequence after a previous command finishes executing, instead of two functions executing simultaneously at the same time. 

         Now let’s take a look at what happens when we use async keyword.

         First, the async keyword can be used only on functions. To do so, simply prepend async to the function definition:
         ```javascript
            async function a() { return 1; }
         ```
         I know that we are trying to get away from the Promise pattern we saw in an earlier section. This is true, but the async function now actually returns a promise object. We’re just breaking away from the Promise Hell pattern here in pursuit of cleaner code. But we still can call .then method on the function:
         ```javascript
          a().then(console.log);              //1
         ``` 
         **console output:**
         ```
            1
         ```   
         Remember that first argument of .then method is the resolve (success) function, and the second argument is reject. So when we pass console.log as the first argument, it treats it as the function that will be executed to display the result. 

         Essentially, the two examples below are exactly the same except the text in the string return value:
         ```javascript
            async function b() { return "first"; }
            async function c() { return Promise.resolve("second"); }
         ```   
         They both return a promise. Even if function a() doesn’t explicitly specify it!

         Let’s call both functions and then call then on the return value:
         ```javascript
            b().then(console.log);              //first
            c().then(console.log);              //second
         ```   
         So far the result is just what you would expect:
         **Console output :**
         ```
            first
            second
         ```   
  - ### await :

      The async and await keywords are usually used in combination with each other. The await keyword is prepended to any statement within an async function:

     **Example:**
     ```javascript
        async function a() { await Math.sqrt(1); return "first"; }
        async function b() { return "second"; }
     ```  

     Note: Using await outside of async function will generate an error.

     Here we added await to a simple math operation that calculates square root of 1. But the important thing here is the fact that now function b() will return first, even though it is second in the execution order:
     ```javascript
        a().then(console.log);              //first
        b().then(console.log);              //second
     ```   
     **console output:**
     ```
        second
        first
     ```   
      Prepending await to a statement will execute it as if it were a promise. The execution flow in the async function will pause on that statement until it is fulfilled. This means that return ”first” does not return immediately like b() function.

      This is just a simple example to demonstrate a point.
      
      In reality, await is used primarily as the most elegant solution for dealing with multiple API endpoints.

      The most important thing about async/await is that it allows you to run synchronous code while it is still written in asynchronous form in your program. This solves all of the problems with Callback Hell, keeps your code clean while providing maximum efficiency for executing multiple API requests.

      The best way to demonstrate it is to put await in the context of a try / catch statement. Let’s take a look at that in the following section.

   - ### async / await with try-catch :

      Let’s take a look at the following example where async and await are implemented for common purpose of grabbing user info object:

     **Example:**
     ```javascript
        const get = async function(username,password){
            try{
                const user = await API.get.user(username, password);
                const roles = await API.get.roles(user);
                const status = await API.get.status(user);
                return user;
            } catch (error){
                //handle error as they come
                console.log(error);
            }
        };
        const userinfo = get();  //get user info
      ```  
      We will wait until API.get.user produces a value and stores it in user variable.

      Until then none of the following await statements will be executed. This is ideal, because the two await statements that follow require user object, which will become available only if user was authenticated.

      Let’s assume if API.get.user fails, API.get.roles and API.get.status will fail silently and a null object will be returned:
      ```javascript
        if(userinfo != null){
            let roles = userinfo.roles;
        }else {
            console.log("wrong username or password");
        }
      ```  
  - ### Final Words:

     async / await syntax is the epitome of synchronous programming in JavaScript. Functions decorated with async conveniently return a promise object.

     Here we get both of both worlds. Our functions take on the asynchronous order, but execute synchronously, just like callbacks, promises or fetch API requests.

     We’ve finally escaped from both Callback Hell and Promise Hell without sacrificing clean code.

     Does it mean you have to abandon using the Promise object with new operator? Of course not. All of the techniques mentioned in this chapter can be used to write successful applications. It depends on design choices you make.

     The async / await keywords help us execute code synchronously, without ever having to directly use callbacks or promises, and without modifying the asynchronous nature of code.

  - ### Generators:

      Generators are similar to async. They came out prior to async keyword, but they share a similar pattern. The reason I wanted to mention them here is because it is still common to see them in JavaScript code. 

      A generator is defined by adding the star (*) character to the function definition:
      ```javascript
       function* generator() {	}
      ``` 
       You can also create it via anonymous function definition assignment:
      ```javascript
        let  generator = function* (){	}
     ```   
 - ### yield:

     Just like async works together with await, generators work together with yield producing exactly the same effect.

     **Example:**
     ```javascript
        let generator = function*() {
            yield 1;
            yield 2;
            yield 3;
            yield "hello";
            return "Done";
        }
      ```  
     But we can’t call generator() function directly. Because every time we do, it will be reset to first yield statement. Also, a single generator is designed to be used only once. After it returns, you can not call it again.
 
      For this reason, proper way to initialize new generator is by variable assignment:
      ```javascript
        let gen = generator();
      ```  
     In a similar way to then method on a Promise object, generators have next method. Whenever you call next on a generator, the next yield statement from the generator’s function body will be executed:
     ```javascript
        console.log(gen.next());    //{value: 1, done: false}
        console.log(gen.next());    //{value: 2, done: false}
        console.log(gen.next());    //{value: 3, done: false}
        console.log(gen.next());    //{value: 'hello', done: false}
        console.log(gen.next());    //{value: 'Done', done: true}
     ```   
     Generators don’t require a return value, but if there is one it will be treated as the final value. Note that next produces an object like {value: 1, done: false}, instead of a single return value. Last statement returns done: true . After this, generator cannot be rewound and repeated again and should be discarded. To create a new one re-assign generator() function to a variable again.

  - ### Catching Errors

      To catch an error using a generator you can use throw method:

     **Example:**
     ```javascript
        function* generator() {
        try{
            yield 1;
            yield 2;
            yield 3;
        }catch(error){
            console.log("Error caught!", error);
        }
        }
        let gen = generator();
        console.log(gen.next());    //{value: 1, done: false}
        console.log(gen.next());    //{value: 2, done: false}
        console.log(gen.next());    //{value: 3, done: false}
        gen.throw(new Error('Something went wrong'));
      ```  
     Within the generator function, make sure to branch out with try-catch statement. 

     An error should be thrown if at least one yield statement has been already executed. Of course, yield 1, yield 2 and yield 3 would be something more meaningful in a real-case scenario, such as an API call.
## 21 Event Loop

   As a JavaScript programmer, you don’t need to understand actual implementation of the event loop. But understanding how the Event Loop works is important for at least two reasons:

   First, questions related to the event loop are often asked at job interviews. 

   The second reason is a bit more practical. By developing an awareness of how it works, you will be able to understand the order of events as they occur, for example, when working with callbacks and timers such as setTimeout function.

   In the previous section we’ve seen how when functions are executed they are placed on the Call Stack. We can even use the stack trace to track which function was originally called to produce an error. This makes sense when working with a deterministic set of events (one statement will proceed to be executed immediately after the previous one is finished executing.) 
    
   But writing JavaScript code is often based on listening to events: timers, mouse clicks, HTTP requests, etc. Events assume there will be a period of waiting time until they return after accomplishing whatever task they were set to perform. But while events are doing their work, we don’t want to halt our main program.

   For this reason, whenever an event occurs, it is handed over to the Event Loop.

   In abstract terms, the Event Loop can be thought of as just what it sounds like. It’s a loop, with a process that keeps running in circles.

   Whenever an event occurs, which can be thought of as a task, it is delegated to the Event Loop, which ”goes out of its way” to pick up the task.

   But it’s not that simple. The event loop handles events such as mouse clicks, and timeouts. But it also needs to take care of updating the browser view.

   The process in the event loop will continue to make rounds, sometimes spending time processing tasks or updating the view.

   The whole experience of how users interact with your front-end application will often depend on how optimized your code is for the event loop. 

   To create smooth user experience, your code should be written in such way, that balances task processing with screen updates. 

   In modern browsers updating the view usually consists of 4 steps: checking for requestAnimationFrame, CSS style calculations, determining layout position, and rendering the view (actually drawing the pixels.) 

   Choosing the right time to update the browser is tricky. After all setTimeout or setInterval were never meant to be used together with rendering the browser view. In fact if you’ve tried to use them to animate elements, you may have experienced choppy performance. 

   This is because setInterval hijacks the event loop, by executing the callback (in which many place their animation code) as fast as possible. For this reason many have moved animations that can be done in CSS to their respective CSS style definitions, instead of performing them in JavaScript.

   However, choppy performance can be fixed with requestAnimationFrame. What happens is that event loop will actually sync to your monitor’s refresh rate, rather than execute each time setInterval fires its callback function.

   - ### Simple definition:
     The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading.

## 22 Call Stack

   The call stack is a place to keep track of currently executing functions. As your code executes, each call is placed on the call stack in order in which it appears in your program. Once the function returns it is removed from the call stack.

   Placing a function call onto the stack is called pushing and removing it from the call stack is called popping. Same idea behind Array.push and .pop methods.

   Step 1: The main entry point is pushed on the stack.

   Step 2: Every time console.log is called, it’s pushed to the call stack.

   Step 3: The console.log prints 1 to the console and returns. It is then popped from the stack. Main function continues to run until it returns. This usually will happen when browser is closed.

  - ### How does this apply to writing code?

      The call stack is a fundamental building block of computer language design. Most languages implement a call stack in one way or another. But how does this apply to those who are simply writing code and not designing computer languages?

   - ### Call Stack Example

     Complex tasks have priorities. Many things require to be done in a logical order.

     When writing software you will often call one function from the body of another function. Let see real time example ,You can’t mop the floor until you fill the bucket with water. You have no reason to fill the bucket with water until you decide to clean the house first:

     **Example:**
     ```javascript
        function mop_floor(){
            console.log("Mop the floor.");
            throw new Error("Ran out of water!");
        }
        function fill_bucket(what){
            console.log("Filling bucket with "+what);
            mop_floor();
        }
        function clean_house(){
            console.log("Cleaning house.");
            fill_bucket("water");
        }
        clean_house();
     ```   
     Calling clean house triggers a chain of function calls.

      Our last function mop floor throws an error. When this happens a stack trace is shown in the console.

     **console output:**
     ```
        Cleaning house.
        Filling bucket with water
        Mop the floor.
        Uncaught Error: Ran out of water!
            at mop_floor 
            at fill_bucket 
            at clean_house
      ```      
      Error displays the trace of the call stack history, starting with the most recently called function mop floor, in which the error occurred. When debugging this help us trace the error all the way back to the original function clean house.

      Most of the time you won’t be concerned with thinking about them when writing code. But you might need to understand them when debugging complex large scale software.

  - ### Execution Context

     The call stack is a stack of execution contexts. When discussing one we will inevitably run into the other. 

     You don’t need to understand execution context or the call stack in great detail to write JavaScript code. But it might help understand the language better.

   - ### What Is Execution Context?

      As your program continues to run, the statements being executed exist alongside something called an execution context. Note that the execution context is pointed to by this keyword in each scope. Not only function-scope either. Blockscope also carries with it a link to execution context via this keyword.

      This often creates confusion, because in JavaScript the this keyword is also used as a reference to an instance of an object in class definitions, so that we can access  its member properties and members.

      But things become clear if we understand that execution context is represented by an instance of an object. It is just not used to access its properties or methods. Instead, it establishes a link between sections of code flow across multiple scopes.

  - ### Root Execution Context:

     When your program opens in a browser, an instance of a window object is created automatically. This window object becomes the root execution context, because it’s the first object instantiated by the browser’s JavaScript engine itself. The window object is the execution context of global scope – they refer to the same thing. The window object is an instance of Window class.

     So how does it work?

     If you call a function from global scope, the this keyword inside the function’s scope will point to window object – the context from which the function was called. The context was carried over into the function’s scope.

     It’s like a link was established from current execution context to the previous one. 

     The execution context is something that is carried over from one scope to another, during code execution flow throughout lifetime of your program. You can think of it as a tree branch that extends into another scope from the root window object.

     In the remaining sections of this chapter we will take a look at one possible interpretation of execution context and the call stack.

  - ### Execution Context In Code

      There is a difference between the logic of call stack and execution contexts and how it manifests itself to the programmer. Obviously, being aware of the call stack isn’t required when writing code. In JavaScript, the closest you will get to working with execution contexts is via the this keyword.

      Execution context is held by this keyword in each scope. The name context suggests that it can change. This is true. The this keyword in each scope may change or point to another new object in various situations.
      
  - ### Window / Global Scope:

      When the window object is created, we get a handful of things happening under the hood. A new lexical environment is created: it contains variable environment for that scope – a place in memory for storing your local variables. Around this time the first ever this binding takes place.

      In global scope this keyword points to window object.

   - ### The Call Stack:

      The call stack keeps track of function calls. If you call a function from context of the global scope, a new entry will be placed ”on top” of the current context. The newly created stack will inherit execution context from the previous environment.

   - ### Call Stack & Execution Context Chain

     As you can see the context carries over to the newly created stack and remains accessible via the this keyword. This process repeats while maintaining a chain of execution contexts all the way up to the currently executing context:

     **Example:**
     ```javascript
        function a(){b();}
        function b(){c();}
        function c(){console.log("function c executed.");}
        a();
      ```  
     Note that each function carries with it its own execution context EC0 – EC3.

     There is always one current executing context. This is the context on the very top of the stack. While all of the previous stacks remain below, until execution returns from the current context (function ran it’s course and returned, so JavaScript removes the context from memory and we no longer need it...) 

     After the function is finished executing the stack is removed from the top and the code flow returns to the remaining previous / uppermost execution context. Contexts are constantly pushed and popped from the call stack.

     Stacking only occurs if you call a function from another function. It won’t happen if all functions are executed consequently from the same execution context.

      In which case... you will have one function pushed to the stack, popped from the stack, and then the next function will be pushed onto the empty stack again... and so on.

  - ### call(), .bind(), .apply():

     These three functions can be used to call a function and choose what this keyword should point to within the scope of that function, overriding its default behavior.

     **call() Method:**

     The call() method is a predefined JavaScript method.

     It can be used to invoke (call) a method with an owner object as an argument (parameter).

     With call(), an object can use a method belonging to another object.

     **Example:**
     ```javascript
        const person = {
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
        }
        const person1 = {
        firstName:"John",
        lastName: "Doe"
        }
        const person2 = {
        firstName:"Mary",
        lastName: "Doe"
        }

        // This will return "John Doe":
        let result = person.fullName.call(person1);
        console.log(result);   			//John Doe
      ```  
       **The call() Method with Arguments**

       The call() method can accept arguments:

       **Example:**
       ```javascript
        const persons = {
            fullName: function(city, country) {
            return this.firstName + " " + this.lastName + "," + city + "," + country;
            }
        }
        const persons1 = {
            firstName:"John",
            lastName: "Doe"
        }
        let result = persons.fullName.call(persons1, "Oslo", "Norway");
        console.log(result);		//John Doe,Oslo,Norway
     ```
     **apply() method:**

      The apply() method is similar to the call() method (previous chapter).

      In this example the fullName method of person is applied on person1:

       **Example:**
       ```javascript
        const person = {
            fullName: function() {
            return this.firstName + " " + this.lastName;
            }
        }
        const person1 = {
            firstName:"John",
            lastName: "Doe"
        }
        const person2 = {
            firstName:"Mary",
            lastName: "Doe"
        }
        let result = person.fullName.apply(person1);
        console.log(result);            //John Doe
      ```
       **The Difference Between call() and apply()**

       The difference is:

       The call() method takes arguments separately.

       The apply() method takes arguments as an array.

       The apply() method is very handy if you want to use an array instead of an argument list.

       **The apply() Method with Arguments**

       The apply() method accepts arguments in an array:

       **Example:**
       ```javascript
        //The apply() Method with Arguments
        const persons = {
            fullName: function(city, country) {
            return this.firstName + " " + this.lastName + "," + city + "," + country;
            }
        }
        const persons1 = {
            firstName:"John",
            lastName: "Doe"
        }
        let result = persons.fullName.apply(persons1, ["Oslo", "Norway"]);
        console.log(result);     //John Doe,Oslo,Norway
       ``` 
      **bind() method :**

      The bind() method creates a new function, when invoked, has the this sets to a provided value.

      The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.

      **Example:**
      ```javascript
        const person = {
            fullName: function() {
            return this.firstName + " " + this.lastName;
            }
        }
        const person1 = {
            firstName:"John",
            lastName: "Doe"
        }
        const person2 = {
            firstName:"Mary",
            lastName: "Doe"
        }
        let result = person.fullName.bind(person1);
        console.log(result());            //John Doe
     ```   
 - ### Stack Overflow:

     The call stack has a maximum size assigned. Stack Overflow occurs when the number of function calls added to the stack increases the stack’s maximum limit (the call stack has a maximum size). A classic example to cause such a situation is Recursion. Recursion is a process in which a function calls itself until a terminating condition is found.

      In real time example like when you pour your favorite soda into a tall glass, it will lose its carbonation and given enough amount and pace it will fizz over the rim. 

     You can think of stack overflow in a similar way. The glass is the call stack’s memory address space. The foam above rim is memory that could not be allocated.

     **Example:**
     ```javascript
        function recursion(){ 
            recursion();      //a function calling itself
        }
        recursion();
      ```  
     **console output:**
     ```
        Uncaught RangeError: Maximum call stack size exceeded
            at recursion (<anonymous>:2:5)
            at recursion (<anonymous>:2:5)
            at recursion (<anonymous>:2:5)
            at recursion (<anonymous>:2:5)
            at recursion (<anonymous>:2:5)
            at recursion (<anonymous>:2:5)
            at recursion (<anonymous>:2:5)
            at recursion (<anonymous>:2:5)
            at recursion (<anonymous>:2:5)
            at recursion (<anonymous>:2:5)
     ```      