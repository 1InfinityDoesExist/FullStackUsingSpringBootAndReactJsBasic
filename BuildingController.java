package com.patel.droolsExample.RestController;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.patel.droolsExample.Beans.BuildingProject;
import com.patel.droolsExample.Repository.BuildingRepository;

@RestController
@CrossOrigin
@RequestMapping(path = "/object/building")
public class BuildingController {
    @Autowired
    private BuildingRepository buildingRepo;

    @PostMapping(path = "/create")
    public ResponseEntity<?> saveBuildingInstance(@Valid @RequestBody BuildingProject buildingProject,
	    BindingResult result) {
	if (result.hasErrors()) {
	    Map<String, String> error = new LinkedHashMap<String, String>();
	    for (FieldError fieldError : result.getFieldErrors()) {
		error.put(fieldError.getField(), fieldError.getDefaultMessage());
	    }
	    return new ResponseEntity<Map<String, String>>(error, HttpStatus.BAD_REQUEST);
	}
	BuildingProject buildingProjectToDB = buildingRepo.save(buildingProject);
	return new ResponseEntity<BuildingProject>(buildingProjectToDB, HttpStatus.OK);
    }

    @GetMapping(path = "/get/{id}")
    public ResponseEntity<?> getBuildingByID(@PathVariable(value = "id") Long id) {
	BuildingProject bp = buildingRepo.getBuildingProjectById(id);
	if (bp == null) {
	    return new ResponseEntity<String>("Sorry No Data Found For This Id" + id, HttpStatus.BAD_REQUEST);
	}
	return new ResponseEntity<BuildingProject>(bp, HttpStatus.OK);
    }

    @GetMapping(path = "/get")
    public ResponseEntity<?> getAllBuildings() {
	List<BuildingProject> buildingList = buildingRepo.getAllBuildings();
	if (buildingList.size() == 0 || buildingList == null) {
	    return new ResponseEntity<String>("Sorry No Data Found", HttpStatus.BAD_REQUEST);
	}
	return new ResponseEntity<List<BuildingProject>>(buildingList, HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<?> deleteBuildingByID(@PathVariable(value = "id") Long id) {
	BuildingProject bp = buildingRepo.getBuildingProjectById(id);
	if (bp == null) {
	    return new ResponseEntity<String>("Sorry No Data Found For This Id" + id, HttpStatus.BAD_REQUEST);
	}
	buildingRepo.deleteById(id);
	return new ResponseEntity<BuildingProject>(bp, HttpStatus.OK);
    }

}
