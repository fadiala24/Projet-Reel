package com.example.apidenrees.Model;

import com.example.apidenrees.Etat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.mapping.Collection;

import javax.persistence.*;
import java.util.List;

@Entity
public class Produits {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.ACTIVER;

    private String nom;

    private Double prix_achat;

    private int quantite;

    private Boolean supprimer = false;
    private Double prix_unitaire;
    private String photos;
    @ManyToOne
    private Category category;
    @ManyToOne
    private Boutiques boutiques;

    public Boolean getSupprimer() {
        return supprimer;
    }

    public void setSupprimer(Boolean supprimer) {
        this.supprimer = supprimer;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Double getPrix_achat() {
        return prix_achat;
    }

    public void setPrix_achat(Double prix_achat) {
        this.prix_achat = prix_achat;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public Double getPrix_unitaire() {
        return prix_unitaire;
    }

    public void setPrix_unitaire(Double prix_unitaire) {
        this.prix_unitaire = prix_unitaire;
    }

    public String getPhotos() {
        return photos;
    }

    public void setPhotos(String photos) {
        this.photos = photos;
    }

    public Produits() {
    }

    public Etat getEtat() {
        return etat;
    }

    public void setEtat(Etat etat) {
        this.etat = etat;
    }
    public Boutiques getBoutiques() {
        return boutiques;
    }

    public void setBoutiques(Boutiques boutiques) {
        this.boutiques = boutiques;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
