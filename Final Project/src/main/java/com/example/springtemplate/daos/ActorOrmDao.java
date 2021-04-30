package com.example.springtemplate.daos;

import com.example.springtemplate.models.Actor;
import com.example.springtemplate.models.Cast;
import com.example.springtemplate.repositories.ActorRepository;
import com.example.springtemplate.repositories.CastRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ActorOrmDao {
  @Autowired
  ActorRepository actorRepository;

  @Autowired
  CastRepository castRepository;

  @PostMapping("/api/actors")
  public Actor createActor(@RequestBody Actor actor) {
    return actorRepository.save(actor);
  }

  @PostMapping("/api/casts/{castId}/actors")
  public Actor createActorForCast(
      @PathVariable("castId") Integer cid,
      @RequestBody Actor actor) {
    actor = actorRepository.save(actor);
    Cast cast = castRepository.findById(cid).get();
    actor.setCasts(cast);
    return actorRepository.save(actor);
  }

  @GetMapping("/api/casts/{cid}/actors")
  public List<Actor> findActorsForCast(
      @PathVariable("cid") Integer castId) {
    Cast cast = castRepository.findById(castId).get();
    return cast.getActors();
  }

  @GetMapping("/api/actors")
  public List<Actor> findAllActors() {
    return (List<Actor>) actorRepository.findAll();
  }

  @GetMapping("/api/actors/{actorId}")
  public Actor findActorById(
      @PathVariable("actorId") Integer id) {
    return actorRepository.findById(id).get();
  }

  @PutMapping("/api/actors/{actorId}")
  public Actor updateActor(
      @PathVariable("actorId") Integer id,
      @RequestBody() Actor newActor) {
    Actor actor = this.findActorById(id);
    actor.setFirstName(newActor.getFirstName());
    actor.setLastName(newActor.getLastName());
    actor.setRole(newActor.getRole());
    return actorRepository.save(actor);
  }

  @DeleteMapping("/api/actors/{actorId}")
  public void deleteActor(
      @PathVariable("actorId") Integer id) {
    actorRepository.deleteById(id);
  }
}
