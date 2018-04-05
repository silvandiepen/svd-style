//import { settingsColor } from 'src/settings/colors.json';
// import Vue from 'vue'
// import VueSmoothScroll from 'vue-smooth-scroll'
//
//
// Vue.use(VueSmoothScroll);

new Vue({
	el: '#app',
	data: {
		button: {
			text: 'Button'
		},
		buttonClasses: [],
		colors: null,
		headingText: 'The quick brown fox jumps over the lazy dog',
		pattern: {
			colorPrimary: 'var(--color-white)',
			colorSecondary: 'var(--color-dark)',
			size: '24',
			width: '12'
		},
		form: {
			firstName: 'John',
			lastName: 'Doe'
		}
	},
	created() {
		let self = this;
		this.loadJSON('src/settings/colors.json', function(response) {
			self.colors = JSON.parse(response).colors;
		});
	},
	methods: {
		slowScroll: function(el, ev) {
			console.log(this);
			console.log(el);
			console.log(ev);
			// e.preventDefault();
			// console.log(e);
			// alert('poep');
		},
		loadJSON: function(file, callback) {
			let xobj = new XMLHttpRequest();
			xobj.overrideMimeType('application/json');
			xobj.open('GET', file, true);
			xobj.onreadystatechange = function() {
				if (xobj.readyState == 4 && xobj.status == '200') {
					callback(xobj.responseText);
				}
			};
			xobj.send(null);
		}
	},
	watch: {
		button: function() {
			console.log('button changed');
		}
	},
	computed: {
		patternStyles: function() {
			return {
				'--pattern-color-primary': this.pattern.colorPrimary,
				'--pattern-color-secondary': this.pattern.colorSecondary,
				'--pattern-size': this.pattern.size + 'px',
				'--pattern-width': this.pattern.width + 'px'
			};
		}
	}
});
