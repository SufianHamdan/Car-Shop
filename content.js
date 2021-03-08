var name = prompt('Enter your name please');
//document.writeln('Hello '+name);

/*var color = prompt("What color do u wish the page would be?!");
document.bgColor = color
document.writeln('You chose the ' +color+ '  for the background :)');*/

//var age = prompt('Enter your age please');

function YouAre()
{
var age = prompt('Enter your age please');
while(isNaN(age))
    {   
    alert("The age must be a number between 1 and 100");
    age = prompt('Enter your age please');
    }

        if(age < 18 && age > 0)
        {
            alert('You are young');
            
        }
        else if(age > 18 && age < 120)
        {
            alert('You are an adult')
        }
}

