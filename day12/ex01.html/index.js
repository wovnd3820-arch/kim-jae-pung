export default async function main() {

    console.log('start App')

    let currentIndex = 0;
    const menuitems = document.querySelectorAll(".menu-intem");

    console.log(menuitems)

    menuitems[currentIndex].classList.add("select")

    document.addEventListener("keydown", (e) => {

        console.log(e.key)

        menuitems[currentIndex]

        if(e.key == "Arrowup") {
            currentIndex--

            if(currentIndex < 0) {
                currentIndex = 2
            }
        }
        else if(e.key == "ArrowDown") {
            currentIndex++
            currentIndex %=3
        }
        console.log(currentIndex)
        menuitems[currentIndex].classList.add('select')

    })


    var a = 1
    console.log(a)
    a = 7
    console.log(a)

    let b = 1
    console.log(b)
    b = 8 + a
    console.log(b)

    var a = 2;
    console.log(a)

    b = 3
    console.log(b)

    const c = 1
    console.log(c)

    c = 3
    console.log(c)

}