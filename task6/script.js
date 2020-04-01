(function() {
    
var posts = [
        {
            id: '1',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '2',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2013-03-17T23:00:00'),
            author: 'Сергей'
        },

        {
            iid: '3',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2014-03-17T23:00:00'),
            author: 'Иванов Иван'
           
        },

        {
            id: '4',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2015-03-17T23:00:00'),
            author: 'Иванов Иван'
           
        },

        {
            id: '5',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2016-03-17T23:00:00'),
            author: 'Сергей'          
        },

        {
            id: '6',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Владимир'
        },

        {
            id: '7',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '8',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Владимир'
        },

        {
            id: '9',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '10',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '11',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '12',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '13',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '14',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-01-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '15',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '16',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '17',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '18',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },

        {
            id: '19',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Николай'
        },

        {
            id: '20',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2021-03-17T23:00:00'),
            author: 'Николай'
        },

    ];

    
    function getPost(id) {
        for (let i = 0; i < posts.length ; i++) {
            if (posts[i].id === id) {
                return posts[i];
            }
        }
    }
    
    function validatePost(post){
        if(typeof post.id !== 'string' || post.id === ''){
            return false;
        }
        if(typeof post.description !== 'string' || post.description === '' || post.description.length > 200)
            return false;
        if(!(post.createdAt instanceof Date)){
            return false;
        }
        if(typeof post.author !== 'string' || post.author === ''){
            return false;
        }
        return true;
    }
    
    function addPost(post) {
        if (validatePost(post)) {            
            posts.push(post);
            return true;
        }
        return false;
    }
    
    function removePost(id){
        for(let i = 0; i < posts.length; i++) {
            if(posts[i].id === id){
                posts.splice(i,1);
                return true;
            }
        }
        return false;
    }

    
    function editPost(id, post){
        let editPost = getPost(id);
        if(post.description !== '' && typeof post.description == 'string'){
            editPost.description = post.description;
        if(validatePost(editPost)){
            for( let i = 0; i < posts.length; i++){
                if(posts[i].id === id){
                    posts[i] = editPost;
                    return true;
                }
              }
           }
        }        
        return false;
    }
    

    function sortByDate(posts) {
        posts.sort((post1,post2) => post1.createdAt - post2.createdAt);
    }
    
    
    function getPosts(skip = 0, top = 10, filterConfig) {
        if(typeof skip !== 'number' || typeof top !== 'number'){
            return 'некорректно заданы параметры';
        }
        let arr = [];
        let searchArr = posts;
        if (typeof filterConfig === 'undefined') {
            arr = searchArr.slice(skip,skip+top);
            sortByDate(arr);
            return arr;
        } 
       
            if (filterConfig.hasOwnProperty('author')) {
                for(let i = 0; i < searchArr.length; i++){
                    if(searchArr[i].author === filterConfig.author){
                        arr.push(searchArr[i]);
                    }                    
                }
                if(arr.length == 0){
                   return 'нет такого автора';
                }
            }
        
        if(filterConfig.hasOwnProperty('from')){
            for(let i = 0; i < searchArr.length; i++){
                    if(Date.parse(searchArr[i].createdAt) >= Date.parse(filterConfig.from)){
                        arr.push(searchArr[i]);
                    }
                }
                if(arr.length == 0){
                   return 'посты с заданной датой не найдены';
                }
        }
        
        if(filterConfig.hasOwnProperty('to')){
            for(let i = 0; i < searchArr.length; i++){
                    if(Date.parse(searchArr[i].createdAt) <= Date.parse(filterConfig.to)){
                        arr.push(searchArr[i]);
                    }
                }
                if(arr.length == 0){
                   return 'посты с заданной датой не найдены';
                }
        } 
        arr = arr.slice(skip,skip+top);
        sortByDate(arr);
        return arr;
    }
    
    //проверка работы методов
    // console.log(editPost('13',{ id: '13', description: ' werty' , createdAt : new Date('2020-03-28T23:00:00') , author: 'Никита'}));
    //  console.log(editPost('13',{ id: '13', description: '' , createdAt : new Date('2020-03-28T23:00:00') , author: ''}));
    
    // console.log(editPost('12',{ id: '12', description: 'good days' , createdAt : new Date('2020-03-28T23:00:00') , author: 'Mike'}));
    // console.log(posts);
    // console.log(validatePost(posts[1]));
    //console.log(validatePost2(posts[1]));
    //console.log(getPost('4'));
    //console.log(addPost(posts[1]));
    //console.log(removePost('7'));
    //console.log(removePost('44'));
    //console.log(removePost('0'));
    /* console.log(addPost({
            id: '47',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },));
    */
    //console.log(posts);
    //  sortByDate(posts);
    //  sortByDate(posts);
    //  console.log(getPosts( 0,10));
    //  console.log(getPosts( 4,3));
    //  console.log(getPosts( 0,5 , {author: 'Николай'}));
    // console.log(posts);
    //   console.log(getPosts( 0,3, {from: '2023-03-25T23:00:00'}));
    // console.log(getPosts( 4,17, {to: '2020-03-25T23:00:00'}));
    //  console.log(getPosts( 0,5 , {author: 'Николай'}));
    // console.log(getPosts( 0,10 , {author: 'Иванов Иван'}));
}());