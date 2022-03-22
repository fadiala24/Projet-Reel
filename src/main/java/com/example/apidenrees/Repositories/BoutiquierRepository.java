package com.example.apidenrees.Repositories;

import com.example.apidenrees.Model.Administrateur;
import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Boutiquier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface BoutiquierRepository extends JpaRepository<Boutiquier, Long> {
    Optional<Boutiquier> findByTelephone(int telephone);
    Optional<Boutiquier> findByLogin(String login);
    Optional<Boutiquier> findByPassword(String password);
    Optional<Boutiquier> findByLoginAndPassword(String login, String password);
    @Query(value = "SELECT COUNT (*) FROM Boutiquier WHERE etat='ACTIVER' ")
    public Integer nombreBoutiquier();
}
