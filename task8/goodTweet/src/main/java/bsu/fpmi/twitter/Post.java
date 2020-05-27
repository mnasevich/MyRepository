package bsu.fpmi.twitter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Post {
    private String id;
    private String description;
    private Date createdAt;
    private String author;
    private List<String> hashtags;
    private List<String> likes;

    public Post(){
        this.id = "";
        this.description = "";
        this.createdAt = new Date();
        this.author = "";
        this.hashtags = new ArrayList<>();
        this.likes = new ArrayList<>();
    }

    public Post(String id, String description, Date createdAt, String author,List<String> hashtags, List<String> likes) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.author = author;
        this.hashtags = new ArrayList<>(hashtags);
        this.likes = new ArrayList<>(likes);
    }
    public void setId(String id){
        this.id = id;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setCreatedAt(Date createdAt){
        this.createdAt = createdAt;
    }

    public void setAuthor(String author){
        this.author = author;
    }

    public void setHashtags(List<String> hashtags){
        this.hashtags = hashtags;
    }

    public void setLikes(List<String> likes){
        this.likes = likes;
    }

    public String getId(){
        return id;
    }

    public String getDescription(){
        return description;
    }

    public Date getCreatedAt(){
        return createdAt;
    }

    public String getAuthor(){
        return author;
    }

    public List<String> getHashtags(){
        return hashtags;
    }

    public List<String> getLikes(){
        return likes;
    }
}