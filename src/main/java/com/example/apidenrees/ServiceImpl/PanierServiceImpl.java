package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Etat;
import com.example.apidenrees.Model.Client;
import com.example.apidenrees.Model.Panier;
import com.example.apidenrees.Model.Produits;
import com.example.apidenrees.Repositories.PanierRepository;
import com.example.apidenrees.Repositories.ProduitRepositry;
import com.example.apidenrees.Services.PanierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class PanierServiceImpl implements PanierService {
    @Autowired
    ProduitRepositry produitRepositry;

    @Autowired
    PanierRepository panierRepository;

    @Override
    public List<Panier> listPanier() {
        return panierRepository.findAll();
    }
   //  -----------------ici ---------------------------------
   @Override
   public void activerPanier(Long id){
       Panier panier=panierRepository.findById(id).get();
       panier.setStatut(Etat.ACTIVER);
   }

    @Override
    public void desactiverPanier(Long id){
        Panier panier=panierRepository.findById(id).get();
        panier.setStatut(Etat.DESACTIVER);
    }
    public void ajout_panier(Panier panier) {
        this.panierRepository.save(panier);
    }
    @Override
    public void ajouterPrixUnitaire(Panier panier, Double prix_uni){
        Panier pn = panierRepository.findById(panier.getId()).get();
        pn.setPrix_unitaire(prix_uni);
        panierRepository.save(pn);
    }
                // -----------------------         ------------------------------------
    @Override
    public Double venteProduit(Produits produits, Integer quantite) {
        Double prixvente = null;
        Boolean verifierQuntte = verifierStock(produits, quantite);
        if (verifierQuntte == true){
            Produits produits1 = produitRepositry.findById(produits.getId()).get();
            produits1.setQuantite(produits1.getQuantite() - quantite);
            prixvente = (produits1.getPrix_unitaire() * quantite);
        }
        return prixvente;
    }
            // -----------------***** -----------------********************
    @Override
    public Boolean verifierStock(Produits produits, Integer quatite) {
        Produits produits1 = produitRepositry.findById(produits.getId()).get();
        if (produits1.getQuantite() >= quatite){
            return true;
        }else {
            return false;
        }
    }

    @Override
    public Panier ajout_panierr(Panier panier) {
        return panierRepository.save(panier);
    }

    @Override
    public Double produit_prix(Panier prod){
        Produits  prod1 = produitRepositry.findById(prod.getProduits().getId()).get();
        return prod1.getPrix_unitaire();
    }



}
