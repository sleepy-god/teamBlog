cates = [{name: 'vue.js'},{name: 'js'}]

let index = cates.indexOf((cate) => cate.name === 'vue.js')

var result = cates.findIndex(item => {
	//这里的判断条件按你需求来写
	return item.name === 'aaa'
})
console.log(result)