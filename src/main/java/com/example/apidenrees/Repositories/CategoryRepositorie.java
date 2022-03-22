package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Boutiquier;
import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.ProduitBoutique;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CategoryRepositorie extends JpaRepository<Category, Long> {
    Optional<Category> findByNom(String nom);
    @Query(value = "SELECT i FROM Category i WHERE  i.produits = :quartier")
    List<ProduitBoutique> findBoutiqueByQuartierAndCategory(@Param("quartier") String quartier);
}
