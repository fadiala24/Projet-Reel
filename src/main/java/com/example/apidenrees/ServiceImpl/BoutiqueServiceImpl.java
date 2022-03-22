package com.example.apidenrees.ServiceImpl;

import com.example.apidenrees.Etat;
import com.example.apidenrees.Model.*;
import com.example.apidenrees.Repositories.BoutiqueRepository;
import com.example.apidenrees.Services.BoutiqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.nio.file.Files;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BoutiqueServiceImpl implements BoutiqueService {
    @Autowired
    BoutiqueRepository boutiqueRepository;
    @Override
    public Boutiques aujout_boutique(Boutiques boutiques, @RequestParam("image") MultipartFile multipartFile) throws IOException {

        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        boutiques.setPhoto(fileName);
        Boutiques savedBou = boutiqueRepository.save(boutiques);
        String uploadDir = "src/main/resources/Photos/" + savedBou.getId();
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        return savedBou;
    }

    @Override
    public String validBoutique(Boutiques boutiques){
    Optional<Boutiques> BoutiqueNom = boutiqueRepository.findByNom(boutiques.getNom());
    Optional<Boutiques>BoutiqueLatitude = boutiqueRepository.findByLatitude(boutiques.getLatitude());
    Optional<Boutiques>BoutiqueLontitude = boutiqueRepository.findByLongitude(boutiques.getLongitude());

        if (BoutiqueNom.isPresent()){
        System.out.println("nom");
        return "nom";
    }else
            if (BoutiqueLatitude.isPresent()){
        System.out.println("latitude");
        return "latitude";
    }
       else if (BoutiqueLontitude.isPresent()){
        System.out.println("longitude");
        return "longitude";

    }
       else{
        return "rien";
    }
}

    @Override
    public List<Boutiques> listBoutique() {
        return boutiqueRepository.findAll();
    }

    @Override
    public Boutiques getBoutiqueById(Long id) {
        return boutiqueRepository.findById(id).get();
    }

    @Override
    public String supprimer_boutique(Long id) {
        Boutiques boutique = boutiqueRepository.findById(id).get();
        boutique.setSupprimer(true);
        boutique.setEtat(Etat.DESACTIVER);
        return "Vous avez supprimer la Boutique "+boutique.getNom();
    }

    @Override
    public String modifier_boutique(Boutiques boutiques, Long id) {
        Boutiques boutiqueExistant = this.boutiqueRepository.findById(id).get();

        boutiqueExistant.setNom(boutiques.getNom());
        boutiqueExistant.setVille(boutiques.getVille());
        boutiqueExistant.setQuartier(boutiques.getQuartier());
        boutiqueExistant.setBoutiquier(boutiques.getBoutiquier());
        boutiqueExistant.setLatitude(boutiques.getLatitude());
        boutiqueExistant.setLongitude(boutiques.getLongitude());
        boutiqueExistant.setEtat(boutiques.getEtat());
        boutiqueExistant.setSupprimer(boutiques.getSupprimer());
        return "Boutique modifiée avec succes";
    }



    @Transactional
    @Override
    public byte[] getpHOTO(Long Id) throws IOException {
        Boutiques trv = boutiqueRepository.findById(Id).get();
        String iconPhoto = trv.getPhoto();
        File file = new File("src/main/resources/Photos/"+ trv.getId() +"/" +iconPhoto);
        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }

    @Override
    public List<Boutiques> findByQuartier(Localite quartier) {
        return boutiqueRepository.findByQuartierK(quartier.getId());
    }

    @Override
    public List<Boutiques> findBoutiquesByVille(Localite ville) {
        return boutiqueRepository.findBoutiquesByVille(ville.getId());
    }

    @Override
    public String restoreBoutique(Long id, Long idBoutique) {
        Boutiques boutiques = boutiqueRepository.findById(id).get();

        boutiques.setSupprimer(false);
        boutiques.setEtat(Etat.ACTIVER);
        return "Vous avez restauré la boutique " + boutiques.getNom();
    }
    @Override
    public void desactiverBoutique(Long id){
     Boutiques boutiques=boutiqueRepository.findById(id).get();
       boutiques.setEtat(Etat.DESACTIVER);
    }


}
