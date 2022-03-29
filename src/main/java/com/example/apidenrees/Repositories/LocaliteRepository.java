package com.example.apidenrees.Repositories;
import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.Localite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LocaliteRepository extends JpaRepository<Localite, Long> {
    Optional<Localite> findByLibelle(String libelle);
    public List<Localite> findAllByParentIdAndEtat(Long parentId,boolean et);

    @Query("SELECT o FROM Localite o where o.etat=:etat and o.parent is null ")
    public List<Localite> findAllByParentIdV(boolean etat);

    @Query("SELECT o FROM Localite o where o.etat=:etat and o.parent is not null ")
    public List<Localite> findAllByParentIQ(boolean etat);

}
