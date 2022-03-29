package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Etat;
import com.example.apidenrees.Model.*;
import com.example.apidenrees.Repositories.BoutiqueRepository;
import com.example.apidenrees.Repositories.ProduitRepositry;
import com.example.apidenrees.Services.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ProduitServiceImpl implements ProduitService {
    @Autowired
    ProduitRepositry produitRepositry;


    @Override
    public Produits ajout_Produit(Produits produits,@RequestParam("image") MultipartFile multipartFile) throws IOException {
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        produits.setPhotos(fileName);
        Produits savedBou = produitRepositry.save(produits);
        String uploadDir = "src/main/resources/Produit/" + savedBou.getId();
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        return savedBou;
    }
    @Override
    public String validProduit(Produits produits){
        Optional<Produits> ProduitNom = produitRepositry.findByNom(produits.getNom());


        if (ProduitNom.isPresent()){
            System.out.println("nom");
            return "nom";
        }

        else{
            return "rien";
        }
    }

    @Override
    public String restoreProduits(Long id, Long idProduit) {
        Produits produits = produitRepositry.findById(id).get();

        produits.setSupprimer(false);
        produits.setEtat(Etat.ACTIVER);
        return "Vous avez restauré le produit " + produits.getNom();
    }

    @Override
    public List<Produits> listProduit() {
        return produitRepositry.findAll();
    }

    @Override
    public Produits getProduitById(Long id) {
        return produitRepositry.findById(id).get();
    }

    @Override
    public String supprimer_produit(Long id) {
        this.produitRepositry.deleteById(id);
        return "Vous avez supprimer le produit ";
    }

    @Override
    public String modifier_produit(Produits produits, Long id) {
        Produits produitExistant = this.produitRepositry.findById(id).get();

        produitExistant.setNom(produits.getNom());
        produitExistant.setQuantite(produits.getQuantite());
        produitExistant.setPrix_unitaire(produits.getPrix_unitaire());
        produitExistant.setBoutiques(produits.getBoutiques());
        produitExistant.setCategory(produits.getCategory());
        produitExistant.setPrix_achat(produits.getPrix_achat());
        return " Produits modifié avec succes";
    }

    @Override
    public byte[] getpHOTO(Long Id) throws IOException {
        Produits trv = produitRepositry.findById(Id).get();
        String iconPhoto = trv.getPhotos();
        File file = new File("src/main/resources/Produit/"+ trv.getId() +"/" +iconPhoto);
        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }

    @Override
    public List<Produits> getProduitByCategory(Long id) {
        return produitRepositry.findProduitsByProduit(id);
    }


}
