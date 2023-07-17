const baseConfig = {
    title : {
        index   : "軟體工程與管理學系-高中生專區",
        student : "系學會活動"
    }
}

/**
 * 取用頁面元素DOM
 */
let baseProperties = {
    title : document.querySelector('title')
}

const filterThePages = () => {

}

/**
 * 賦值，給予頁面元素一個值，例如title
 * 此method為IIFE(立即函式，自呼叫)
 */
(function (){
    baseProperties.title.text = baseConfig.title.index
})()

// caller();
