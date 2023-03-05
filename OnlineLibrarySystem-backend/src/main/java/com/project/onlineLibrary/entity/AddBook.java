package com.project.onlineLibrary.entity;

import javax.persistence.*;

@Entity
@Table
public class AddBook {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String bookname;
    private String imageurl;
    private String author;
    private String website;

    public AddBook() {
    }

    public AddBook(int id, String bookname, String imageurl, String author, String website) {
        this.id = id;
        this.bookname = bookname;
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

    public String getBookname() {
        return bookname;
    }

    public void setBookname(String bookname) {
        this.bookname = bookname;
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
