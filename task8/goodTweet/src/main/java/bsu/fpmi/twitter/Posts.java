package bsu.fpmi.twitter;

import java.util.List;

public class Posts {
    private List<Post> posts;

    public Post getPost(String id){
        for (int i = 0; i < posts.size(); i++) {
            if (posts.get(i).getId().equals(id)) {
                return posts.get(i);
            }
        }
        return null;
    }

    public boolean validate(Post post){
        if (post.getId() == null || post.getId().length() == 0)
            return false;
        if (post.getDescription() == null || post.getDescription().length() > 200)
            return false;
        if (post.getCreatedAt() == null)
            return false;
        if (post.getAuthor() == null || post.getAuthor().length() == 0)
            return false;
        else return true;
    }

    public boolean addPost(Post post){
        if(validate(post)) {
            posts.add(post);
            return true;
        }
        return false;
    }

    public boolean editPost(String id, Post post){
        Post editPost = this.getPost(id);
        if(post.getDescription() != null)
            editPost.setDescription(post.getDescription());
        if(post.getHashtags() != null)
            editPost.setHashtags(post.getHashtags());
        return validate(editPost);
    }

    public boolean removePost(String id){
        for (int i = 0; i < posts.size(); i++){
            if (posts.get(i).getId().equals(id)) {
                posts.remove(i);
                return true;
            }
        }
        return false;
    }

    public List<Post> getAll() {
        return posts;
    }

    public void removeAll() {
        posts.clear();
    }
}
