package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Model.Boutiques;
import com.example.apidenrees.Model.Category;
import com.example.apidenrees.Model.ProduitBoutique;
import com.example.apidenrees.Model.Produits;
import com.example.apidenrees.Repositories.ProduitBoutiqueRepository;
import com.example.apidenrees.Services.ProduitBoutiqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProduitBoutiqueServiceImpl implements ProduitBoutiqueService {
    @Autowired
    ProduitBoutiqueRepository produitBoutiqueRepository;


    @Override
    public List<ProduitBoutique> getProduitByBoutique(Boutiques boutiques, Produits produits) {
        return null;
    }
}
