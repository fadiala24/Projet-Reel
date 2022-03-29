package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.ProduitBoutique;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProduitBoutiqueRepository extends JpaRepository<ProduitBoutique, Long> {

    // ************ Requete pour chercher la Boutique selon le quartier et la category **********************

@Query(value = "SELECT i FROM ProduitBoutique i WHERE i.produits.id= :idP AND i.boutiques.id= :idB")
  List<ProduitBoutique> findBoutiqueByQuartierAndCategory(@Param("idP") Long idQ, @Param("idB") Long idB);

  @Query(value = "SELECT i FROM ProduitBoutique i,Boutiques b,Produits p WHERE i.boutiques.id=b.id AND i.produits.id=p.id AND b.id=:idB")
  List<ProduitBoutique> findBoutiqueByQuartierAndCategoryK(@Param("idB") Long idB);

}
