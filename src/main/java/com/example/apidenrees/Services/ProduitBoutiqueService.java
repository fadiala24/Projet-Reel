package com.example.apidenrees.Services;

import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Localite;
import com.example.apidenrees.Model.ProduitBoutique;
import com.example.apidenrees.Model.Produits;

import java.util.List;

public interface ProduitBoutiqueService {

    public List<ProduitBoutique> getProduitByBoutique(Boutiques boutiques, Produits produits);

}
