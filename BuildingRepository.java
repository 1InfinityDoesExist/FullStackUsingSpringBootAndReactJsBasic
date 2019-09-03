package com.patel.droolsExample.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.patel.droolsExample.Beans.BuildingProject;

@Repository
public interface BuildingRepository extends JpaRepository<BuildingProject, Long> {

    @Query("Select BuildingProject from #{#entityName} BuildingProject where id=?1")
    public BuildingProject getBuildingProjectById(Long id);

    @Query("Select BuildingProject from #{#entityName} BuildingProject")
    public List<BuildingProject> getAllBuildings();

}
