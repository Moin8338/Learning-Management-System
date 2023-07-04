package com.server.lms.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Description;

@Table
@Entity
public class course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String Title;

    private String headline;

    private String deficultyLevel;

    private String category;

    private String description;

    @Column(columnDefinition="LONGTEXT")
    private String vedioLink;

    
    public course() {
    }

    public course(int id, String Title, String deficultyLevel, String headline,String category, String description,
            String vedioLink) {
        this.id = id;
        this.Title = Title;
        this.deficultyLevel = deficultyLevel;
        this.category = category;
        this.description = description;
        this.vedioLink = vedioLink;
        this.headline = headline;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String Title) {
        this.Title = Title;
    }

    public String getDeficultyLevel() {
        return deficultyLevel;
    }

    public void setDeficultyLevel(String deficultyLevel) {
        this.deficultyLevel = deficultyLevel;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVedioLink() {
        return vedioLink;
    }

    public void setVedioLink(String vedioLink) {
        this.vedioLink = vedioLink;
    }
    

    @Override
    public String toString() {
        return "course [id=" + id + ", Title=" + Title + ", deficultyLevel=" + deficultyLevel
                + ", category=" + category + ", description=" + description + ", vedioLink=" + vedioLink + "]";
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    
    
}
