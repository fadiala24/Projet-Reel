package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BoutiqueRepository extends JpaRepository<Boutiques, Long> {

  Optional<Boutiques> findByNom(String nom);
  Optional<Boutiques> findByLatitude(String latitude);
  Optional<Boutiques> findByLongitude(String longitude);

    // ************ Requete pour chercher la Boutique selon la Ville
  @Query(value = "SELECT v FROM Boutiques v,Localite l WHERE l.id=v.ville.id AND l.parent is null and l.id=:id")
  List<Boutiques> findBoutiquesByVille(long id);


    // ************** Requete pour chercher la Boutique selon le quartier
    @Query(value = "SELECT qv FROM Boutiques qv,Localite l WHERE l.id=qv.quartier.id and l.parent is not null and l.id =:id")
    List<Boutiques> findByQuartierK(Long id);

    // ********************* Le nombre total de Boutiques
    @Query(value = "SELECT COUNT (*) FROM Boutiques WHERE etat='ACTIVER' AND boutiquier.etat='ACTIVER'")
    public Integer nombreBoutique();

    @Query(value = "SELECT b FROM Boutiques b WHERE b.boutiquier.id =:id  AND b.etat='ACTIVER'")
    List<Boutiques> findBoutiquesByBoutiquier( Long id);
}
