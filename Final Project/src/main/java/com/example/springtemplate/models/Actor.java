package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="actors")
public class Actor {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String firstName;
  private String lastName;
  private String role;

  @ManyToOne
  @JsonIgnore
  private Cast casts;

  public Integer getId() { return id; }

  public void setId(Integer id) { this.id = id; }

  public String getFirstName() { return firstName; }

  public void setFirstName(String firstName) { this.firstName = firstName; }

  public String getLastName() { return lastName; }

  public void setLastName(String lastName) { this.lastName = lastName; }

  public String getRole() { return role; }

  public void setRole(String role) { this.role = role; }

  public Cast getCasts() {
    return casts;
  }

  public void setCasts(Cast casts) {
    this.casts = casts;
  }

}