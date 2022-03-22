package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.ProduitBoutique;
import com.example.apidenrees.Model.Produits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProduitRepositry extends JpaRepository<Produits, Long> {
    Optional<Produits> findByNom(String nom);

    @Query(value = "SELECT i FROM Produits i WHERE  i.category.id = :id")
    List<Produits> findProduitsByProduit(Long id);

    @Query(value = "SELECT l FROM Produits l WHERE l.boutiques.id = :id")
    List<Produits> findProduitsByBoutiques(@Param("id") Long id);

    @Query(value = "SELECT COUNT (*) FROM Produits WHERE etat='ACTIVER' AND boutiques.etat='ACTIVER'")
    public Integer nombreProduit();
}
