import axios from 'axios';

export default {

    namespaced: 'user',
    state: {
        username: localStorage.getItem("username") || '',
        identity: localStorage.getItem("identity") || '',
    },

    actions: {
        login({
            commit,
            state
        }, data) {

            return new Promise((resolve, reject) => {
                
                axios({
                    method: "post",
                    url: "/admin/account/login",
                    data,
                    withCredentials: true
                }).then(res => {
                    let {
                        status,
                        message
                    } = res.data;
                    // console.log(res.data);
                    if (status == 0) {
                        state.username = message.uname;
                        state.identity = message.realname;
                        localStorage.setItem("username", message.uname);
                        localStorage.setItem("identity", message.realname);
                        
                    } else if(status == 1) {
                        //  this.$message.error(message); 
                    }

                    resolve(res.data);
                });
            })


        },
        logout({
            state
        }) {
            return new Promise((resolve, reject) => {
                localStorage.removeItem("username");
                localStorage.removeItem("identity");
                state.username = "";
                state.identity = "";
                resolve();
            })

        }
    }


}