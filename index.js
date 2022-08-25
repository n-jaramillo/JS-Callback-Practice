const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction) {
    if (direction === 'null') {
        character.src = 'assets/green-character/static.gif'
    }
    if (direction === 'west') {
        character.src = 'assets/green-character/west.gif'
    }
    if (direction === 'north') {
        character.src = 'assets/green-character/north.gif'
    }
    if (direction === 'east') {
        character.src = 'assets/green-character/east.gif'
    }
    if (direction === 'south') {
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


/*
Bonus: Change z-index when character walks in front of other images

Code to store object properties in an array. Use array to check if character is walking in front of image.

Store images in an array
let objImgs = document.querySelectorAll('img")

Initialize objects array
let objects = [];

for loop to store properties into objects array
for(let i = i; i < objImgs.length; i++) { // start i at 1 to skip character img

    // get style properties of image
    let style = window.getComputedStyle(objImgs[i])

    // get property values of image from style variable and remove "px" from the string before converting to a number
    let left = Number(style.getPropertyValue('left').slice(0, this.length - 2))
    let bottom = Number(style.getPropertyValue('bottom').slice(0, this.length - 2))

    // get width and height of object
    let width = objImgs[i].width
    let height = objImgs[i].height

    // push object properties into objects array
    objects.push({'left': left, 'bottom': bottom, 'width': width, 'height': height})
}

Above code was checked in live server in the console to see if the objects array matches with desired outcome

Could not figure out an algorithm to check if character was walking in front of other images. The idea is to check if character is walking along the bottom of an image, z-index would be changed to 1 if the character was walking along the bottom and width amount of image then changed back to auto. If character was walking past an image but had a bottom property greater than the objects[i].bottom + character.height then z-index would remain at auto.
*/