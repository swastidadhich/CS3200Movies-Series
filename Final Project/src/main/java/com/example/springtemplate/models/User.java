package com.example.springtemplate.models;

import java.sql.Timestamp;
import javax.persistence.*;
import java.sql.Date;

// created a class called User that mirrors the definition of the users table
// each object instance of the User class will correspond to a record in the users table
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private Date dob;
    private String favSeries;
    private Timestamp created;
    private Timestamp updated;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Date getDob() { return dob; }
    public void setDob(Date Dob) { this.dob = dob; }
    public String getFavSeries() { return favSeries; }
    public void setFavSeries(String favSeries) { this.favSeries = favSeries; }
    public Timestamp getCreated() { return created; }
    public void setCreated(Timestamp created) { this.created = created; }
    public Timestamp getUpdated() { return updated; }
    public void setUpdated(Timestamp updated) { this.updated = updated; }

    public User(String firstName, String lastName, String username,
        String password, String email, Date dob, String favSeries) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.favSeries = favSeries;
    }

    public User(String username, String password, String first_name, String last_name,
        String email, Date dob) {
    }
}