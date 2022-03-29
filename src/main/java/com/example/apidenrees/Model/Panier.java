package com.example.apidenrees.Model;

import com.example.apidenrees.Etat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Panier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private LocalDate date_creation = LocalDate.now();
    private LocalTime heure_creation = LocalTime.now();
    private int quantite;
    private Etat statut = Etat.ENCOURS;

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }
    private Double prix_unitaire;
    @ManyToOne
    private  Client client;

    @ManyToOne
    private Produits produits;

    public LocalDate getDate_creation() {
        return date_creation;
    }

    public void setDate_creation(LocalDate date_creation) {
        this.date_creation = date_creation;
    }

    public LocalTime getHeure_creation() {
        return heure_creation;
    }

    public void setHeure_creation(LocalTime heure_creation) {
        this.heure_creation = heure_creation;
    }

    public Etat getStatut() {
        return statut;
    }

    public void setStatut(Etat statut) {
        this.statut = statut;
    }

    public Double getPrix_unitaire() {
        return prix_unitaire;
    }

    public void setPrix_unitaire(Double prix_unitaire) {
        this.prix_unitaire = prix_unitaire;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Produits getProduits() {
        return produits;
    }

    public void setProduits(Produits produits) {
        this.produits = produits;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
