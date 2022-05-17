var day = document.getElementById('day')

var year = document.getElementById('year')

var month = document.getElementById('month')



function time(i,clock){
    var dayOption = document.createElement('option')
    var dayOptionText = document.createTextNode(i)
 
    dayOption.appendChild(dayOptionText)
    clock.appendChild(dayOption)
}

for (var i = 1; i <= 31; i++) {
   time(i,day)
}




for (var i = 1950; i <= 2022; i++) {
   time(i,year)
}




for (var i = 1; i <= 33; i++) {
   time(i,month)
}

var fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "papaya", "orange", "coconut", "pineapple","jackfruit", "pear", "guava"]

for(var i = 0; i<fruits.length; i++){
    document.write( fruits[i] + "<br>")
}