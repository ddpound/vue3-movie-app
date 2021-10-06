import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import ReservationR from './ReservationRanking'

export default createRouter({
    // Hash mode, History Mode
    // https://google.com/#/search
    // hash 모드를 사용해야 페이지를 찾을수 없다는 에러를 해결해줄수있다
    history: createWebHashHistory(),
    // pages를 구분해줌
    // https://google.com/
    routes: [
        {
            path: '/', // 메인
            component: Home
        },
        {
            path: '/movie', // 메인
            component: Movie
        },
        // https://google.com/about
        {
            path: '/about',
            component: About
        },
        {
            path: '/ReservationR',
            component: ReservationR
        }
    ]
})