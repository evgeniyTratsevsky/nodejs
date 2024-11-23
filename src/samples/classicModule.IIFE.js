/* Immediate function invocation
*   call function
*   return an object
*   set returned value in myModule variable
*
*   all privates are hidden
* */

const myModule = (function (dep1, dep2) {
    const privateProperty = 'private';

    const privateFunc = () => {
        console.log('I am a private');
    };

    console.log(dep1, dep2);

    return {
        publicProperty: 'public',
        publicMethod: function () {
            console.log('I am public');

            privateFunc();
        }
    };
})('dep1', 'dep2');


console.log(myModule);
