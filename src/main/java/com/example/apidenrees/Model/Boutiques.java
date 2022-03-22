package com.example.apidenrees.Model;

import com.example.apidenrees.Etat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.mapping.Collection;

import javax.persistence.*;
import java.util.List;

@Entity
public class Boutiques {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String nom;
    private String photo;


    private String latitude;

    private String longitude;

    private Boolean supprimer = false;
    @Column(nullable = true)
    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.DESACTIVER;
    @ManyToOne
    private Boutiquier boutiquier;


    @ManyToOne
    private  Localite ville;
    @ManyToOne
    private  Localite quartier;

    @ManyToMany
    private List<Administrateur> administrateurs;
    public Boolean getSupprimer() {
        return supprimer;
    }

    public void setSupprimer(Boolean supprimer) {
        this.supprimer = supprimer;
    }

    public Etat getEtat() {
        return etat;
    }

    public void setEtat(Etat etat) {
        this.etat = etat;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public Localite getQuartier() {
        return quartier;
    }

    public void setQuartier(Localite quartier) {
        this.quartier = quartier;
    }

    public Localite getVille() {
        return ville;
    }

    public void setVille(Localite ville) {
        this.ville = ville;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public List<Administrateur> getAdministrateurs() {
        return administrateurs;
    }

    public void setAdministrateurs(List<Administrateur> administrateurs) {
        this.administrateurs = administrateurs;
    }

    public Boutiquier getBoutiquier() {
        return boutiquier;
    }

    public void setBoutiquier(Boutiquier boutiquier) {
        this.boutiquier = boutiquier;
    }

    public Boutiques() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
