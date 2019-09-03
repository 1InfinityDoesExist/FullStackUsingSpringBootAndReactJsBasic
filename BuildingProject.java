package com.patel.droolsExample.Beans;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

import io.swagger.annotations.ApiModelProperty;

@Entity(name = "Building_Project")
@Table(name = "building_project")
public class BuildingProject implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "building_type")
    @ApiModelProperty(notes = "What type of building it is ...?")
    private String building_type;
    @Column(name = "building_number")
    private Long building_number;
    @Column(name = "email")
    @ApiModelProperty(notes = "Email")
    private String email;
    @Column(name = "establishment_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-mm-dd'T'HH:mm:ss.SSS'Z'")
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime establishment_date;
    @Column(name = "telephone")
    @ApiModelProperty(notes = "Telephone Number of Builder")
    public String telephone;
    public BuildingProject() {
	super();
	// TODO Auto-generated constructor stub
    }
    public BuildingProject(Long id, String building_type, Long building_number, String email,
	    LocalDateTime establishment_date, String telephone) {
	super();
	this.id = id;
	this.building_type = building_type;
	this.building_number = building_number;
	this.email = email;
	this.establishment_date = establishment_date;
	this.telephone = telephone;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getBuilding_type() {
        return building_type;
    }
    public void setBuilding_type(String building_type) {
        this.building_type = building_type;
    }
    public Long getBuilding_number() {
        return building_number;
    }
    public void setBuilding_number(Long building_number) {
        this.building_number = building_number;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public LocalDateTime getEstablishment_date() {
        return establishment_date;
    }
    public void setEstablishment_date(LocalDateTime establishment_date) {
        this.establishment_date = establishment_date;
    }
    public String getTelephone() {
        return telephone;
    }
    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((building_number == null) ? 0 : building_number.hashCode());
	result = prime * result + ((building_type == null) ? 0 : building_type.hashCode());
	result = prime * result + ((email == null) ? 0 : email.hashCode());
	result = prime * result + ((establishment_date == null) ? 0 : establishment_date.hashCode());
	result = prime * result + ((id == null) ? 0 : id.hashCode());
	result = prime * result + ((telephone == null) ? 0 : telephone.hashCode());
	return result;
    }
    @Override
    public boolean equals(Object obj) {
	if (this == obj)
	    return true;
	if (obj == null)
	    return false;
	if (getClass() != obj.getClass())
	    return false;
	BuildingProject other = (BuildingProject) obj;
	if (building_number == null) {
	    if (other.building_number != null)
		return false;
	} else if (!building_number.equals(other.building_number))
	    return false;
	if (building_type == null) {
	    if (other.building_type != null)
		return false;
	} else if (!building_type.equals(other.building_type))
	    return false;
	if (email == null) {
	    if (other.email != null)
		return false;
	} else if (!email.equals(other.email))
	    return false;
	if (establishment_date == null) {
	    if (other.establishment_date != null)
		return false;
	} else if (!establishment_date.equals(other.establishment_date))
	    return false;
	if (id == null) {
	    if (other.id != null)
		return false;
	} else if (!id.equals(other.id))
	    return false;
	if (telephone == null) {
	    if (other.telephone != null)
		return false;
	} else if (!telephone.equals(other.telephone))
	    return false;
	return true;
    }
    @Override
    public String toString() {
	return "BuildingProject [id=" + id + ", building_type=" + building_type + ", building_number=" + building_number
		+ ", email=" + email + ", establishment_date=" + establishment_date + ", telephone=" + telephone + "]";
    }
    
    

}
