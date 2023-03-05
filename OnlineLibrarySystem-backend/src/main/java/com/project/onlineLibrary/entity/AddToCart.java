package com.project.onlineLibrary.entity;

import javax.persistence.*;

@Entity
@Table
public class AddToCart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String coursename;
    private int courseid;
    private String likeduser;
    private int userid;
    private String imageurl;
    private  String author;
    private  String website;

    public AddToCart() {
    }

    public AddToCart(int id, String coursename, int courseid, String likeduser, int userid, String imageurl, String author, String website) {
        this.id = id;
        this.coursename = coursename;
        this.courseid = courseid;
        this.likeduser = likeduser;
        this.userid = userid;
        this.imageurl = imageurl;
        this.author = author;
        this.website = website;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }

    public int getCourseid() {
        return courseid;
    }

    public void setCourseid(int courseid) {
        this.courseid = courseid;
    }

    public String getLikeduser() {
        return likeduser;
    }

    public void setLikeduser(String likeduser) {
        this.likeduser = likeduser;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getImageurl() {
        return imageurl;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}
