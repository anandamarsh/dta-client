## Introduction

This App is the frontend for DTA interview quiz, the specs of which are located at [Coding Exercise - Progress Bars](https://coding-exercise-bba593b.apps.y.cld.gov.au/),
The code is organised such that it is easier for the examiner to judge its correctness. It is assumes that this code will not be extended / reused.
 
 ## Design decisions
 
 **Using a UI framework like MaterialUI should have been a great choice if this were a production ready app. Since its an interview question, I am refraining from using any UI libraries**
 
 ##### Leaving all files in `/src` folder
 All the source-code files created by `create-react-app` are being left in `/src` folder. In real-life projects, I'd normally create folders similar to `/service`, `/component`, `/util` etc. 
 
 ##### Browser compatibilty
 I have limited number of browsers, but I'd make it work on Chrome, Safari, IE, Edge, and on Mac, PC, iPhone, iPad and Android.
 
 ##### Component Design
 Its clear that we are talking about the following hierarchy:
 
 <pre>
  BarBox
    |
    |
    |---- Bar 1
    |
    |---- Bar 2
    |       .
    |       .
    |       .
    |---- Bar n
    |
    |
    |---- Selector    
    |
    |
    |---- Button 1
    |
    |---- Button 2
    |       .
    |       .
    |       .
    +---- Button m
 </pre>   
    
Hence, it makes sense to  create a component called `BarBox` which would be seeded with the initial state of the system `<[bars],[buttons]>`. 
`BarBox` would then bear the state of each `Bar`, which would be altered by action on each `Button`. Hence, we would also create two stateless 
components called `Bar` and `Button`.

 ##### Missing features / enhancements
 
* Drop-down is not required. Simply clicking the bar should select it.
* Bar color vs Text color worls well for lower and higher values, but while in the middle, the text is not visible very well.
* After 100% is crossed, bar color should perhaps change as variations of red


































