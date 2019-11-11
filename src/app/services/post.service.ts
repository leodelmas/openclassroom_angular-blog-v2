import { Subject } from 'rxjs';

export class PostService {

    postSubject = new Subject<any[]>();

    posts = [
        {
            id: 1,
            title: 'Article 1',
            content: 'Content 1',
            loveits: 0,
            created_at: new Date()
        },
        {
            id: 2,
            title: 'Article 2',
            content: 'Content 2',
            loveits: 0,
            created_at: new Date()
        },
        {
            id: 3,
            title: 'Article 3',
            content: 'Content 3',
            loveits: 0,
            created_at: new Date()
        }
    ];

    emitPostSubject() {
        this.postSubject.next(this.posts);
    }

    addPost(title: string, content: string, loveits: number, created_at: Date) {
        const postObject = {
            id: 0,
            title: '',
            content: '',
            loveits: 0,
            created_at: new Date()
        };
        postObject.title = title;
        postObject.content = content;
        postObject.loveits = loveits;
        postObject.created_at = created_at;
        postObject.id = this.posts[(this.posts.length - 1)].id + 1;
        this.posts.push(postObject);
        this.emitPostSubject();
    }

    deletePost(postId) {
        this.posts.splice(postId - 1, 1);
        this.emitPostSubject();
    }

    likePost(postId) {
        this.posts[(postId - 1)].loveits = this.posts[(postId - 1)].loveits + 1;
    }
    
    dislikePost(postId) {
        this.posts[(postId - 1)].loveits = this.posts[(postId - 1)].loveits - 1;
    }
}