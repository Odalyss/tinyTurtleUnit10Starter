TinyTurtle.apply(window); 

// form a square
function square(){
forward(40);
right (90);
forward(40);
right(90);
forward(40);
right(90);
forward(40);
right(90);
forward(40);
}
square();
right(30);
function triangle(){
    forward(40);
    right(120);
    forward(40);
    right(120);
    forward(40);
}
triangle();
forward(40);
function rectangle (){
forward(40);
right(90);
forward(80);
right(90);
forward(40);
right(90);
forward(80);
}
rectangle();
stamp();
rectangle();
left(45);
square();
forward(60);
square(4);

