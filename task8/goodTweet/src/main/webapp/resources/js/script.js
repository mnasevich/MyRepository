class PostCollection{
        
    constructor(posts){
            this._posts = (posts || []);
    }
        
        
    get(id) {
        for (let i = 0; i < this._posts.length ; i++) {
            if (this._posts[i].id === id) {
                return this._posts[i];
            }
        }
    }
        
        
    static validatePost(post){
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
    
     add(post) {
        if (PostCollection.validatePost(post)) {            
            this._posts.push(post);
            return true;
        }
        return false;
    }
    
     remove(id){
        for(let i = 0; i < this._posts.length; i++) {
            if(this._posts[i].id === id){
                this._posts.splice(i,1);
                return true;
            }
        }
        return false;
    }

    
     edit(id, post){
        let editPost = this.get(id);
        if(post.description !== '' && typeof post.description == 'string'){
            editPost.description = post.description;
        if(PostCollection.validatePost(editPost)){
            for( let i = 0; i < this._posts.length; i++){
                if(this._posts[i].id === id){
                    this._posts[i] = editPost;
                    return true;
                }
              }
           }
        }        
        return false;
    }
    

    static sortByDate(posts) {
        posts.sort((post1,post2) => post1.createdAt - post2.createdAt);
    }
    
    
    getPage(skip = 0, top = 10, filterConfig) {
        if(typeof skip !== 'number' || typeof top !== 'number'){
            return 'некорректно заданы параметры';
        }
        let arr = [];
        let searchArr = this._posts;
        if (typeof filterConfig === 'undefined') {
            arr = searchArr.slice(skip,skip+top);
            PostCollection.sortByDate(arr);
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
        PostCollection.sortByDate(arr);
        return arr;
    }
    
    clear(){
            this._posts = [];
     }
 }
  
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

    
    
    

    
    //проверка работы методов
    
    
    //let myPosts = new PostCollection(posts);
    //console.log(myPosts.get('4'));
    //console.log(myPosts.edit('13',{ id: '13', description: ' werty' , createdAt : new Date('2020-03-28T23:00:00') , author: 'Никита'}));

    //console.log(myPosts);
    
    //console.log(myPosts.edit('12',{ id: '12', description: 'good days' , createdAt : new Date('2020-03-28T23:00:00') , author: 'Mike'}));
    //console.log(myPosts);
    
    //console.log(PostCollection.validatePost({ id: '12', description: 'good days' , createdAt : new Date('2020-03-28T23:00:00') , author: 'Mike'}));

    //console.log(PostCollection.validatePost({ id: '', description: 'good days' , createdAt : new Date('2020-03-28T23:00:00') , author: 'Mike'}));

   
    //console.log(myPosts.remove('7'));
    //console.log(myPosts);
    //console.log(myPosts.remove('44'));
    //console.log(myPosts.remove('0'));
    /*console.log(myPosts.add({
            id: '47',
            description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
            createdAt: new Date('2019-03-17T23:00:00'),
            author: 'Иванов Иван'
        },));
    */
    //console.log(myPosts);
    //console.log(myPosts.getPage( 0,10));
    //console.log(myPosts.getPage( 4,3));
    //console.log(myPosts.getPage( 0,5 , {author: 'Николай'}));
    //console.log(myPosts.getPage( 0,3, {from: '2023-03-25T23:00:00'}));
    //console.log(myPosts.getPage( 4,17, {to: '2020-03-25T23:00:00'}));
    //console.log(myPosts.getPage( 0,10 , {author: 'Иванов Иван'}));
    //myPosts.clear();
    //console.log(myPosts);