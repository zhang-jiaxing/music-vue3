import { Service } from '@element-plus/icons-vue'
import api from './index'

export function Get(){
    return api({
        url:"/banner?type=0"
    })
};
export function Getchaxun(e){
    return api({
        url:"/search?keywords="+e
    })
};
export function Getgedan(){
    return api({
        url:"/related/playlist?id=1"
    })
};
export function Getgedanleibiao(a){
    return api({
        url:"/playlist/track/all?id="+a
    })
};
export function Getgedanxiangxi(b){
    return api({
        url:"/playlist/detail?id="+b
    })
};
export function Getgequ(c){
    return api({
        url:"/song/url/v1?id="+c+"&level=exhigh",
    })
};
export function Getgqxx(d){
    return api({
        url:"/song/detail?ids="+d
    })
};
export function Getgqgc(f){
    return api({
        url:"/lyric?id="+f
    })
}