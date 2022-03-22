package com.example.apidenrees.Services;

import com.example.apidenrees.Model.Panier;
import com.example.apidenrees.Model.Produits;

import java.util.List;

public interface PanierService {
    List<Panier> listPanier();
    void ajout_panier(Panier panier);
    public Double venteProduit(Produits produits, Integer quantite);
    public Boolean verifierStock(Produits produits, Integer quatite);
    public Panier ajout_panierr(Panier panier);
    public void ajouterPrixUnitaire(Panier panier, Double prix_uni);
    public Double produit_prix(Panier prod);

}
