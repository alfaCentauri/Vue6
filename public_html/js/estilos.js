/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vue = new Vue({
    el: '#app',
    data: {
      isActive: true,
      hasError: false
    }
});

var vue2 = new Vue({
    el: '#app-2',
    data: {
      isActive: false,
      hasError: true
    }
});

var vue3 = new Vue({
    el: '#app-3',
    data: {
        classObject: {
          active: true,
          'text-danger': false
        }
    }
});

var vue4 = new Vue({
    el: '#app-4',
    data: {
        isActive: true,
        error: null
      },
    computed: {
        classObject: function () {
          return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
          }
        }
    }
});

var vue5 = new Vue({
    el: '#app-5',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});

var vue6 = new Vue({
    el: '#app-6',
    data: {
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});

var vue7 = new Vue({
    el: '#app-7',
    data: {
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});

var vue8 = new Vue({
    el: '#app-8',
    data: {
      activeColor: 'red',
      fontSize: 30
    }
});

var vue9 = new Vue({
    el: '#app-9',
    data: {
      styleObject: {
        color: 'blue',
        fontSize: '14px'
      }
    }
});

var vue10 = new Vue({
    el: '#app-10',
    data: {
        basico: {
            color: 'black',
            fontSize: '14px',
            background: '#FFFF01',
            display: 'block',
        },
        overridingStyles: {
            fontFamily: 'Arial, sans-serif, Helvetica',
            fontStyle: 'italic',
        },
    }
});

var vue11 = new Vue({
    el: '#app-11',
    data: {
        basico: {
            color: 'black',
            fontSize: '14px',
            background: '#FFFF01',
            display: 'block',
        },
        overridingStyles: {
            fontFamily: 'Arial, sans-serif, Helvetica',
            fontStyle: 'italic',
        },
    }
});