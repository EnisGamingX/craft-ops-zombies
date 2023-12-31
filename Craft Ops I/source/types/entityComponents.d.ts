import * as mc from "@minecraft/server";

export type EntityComponents = {
    "minecraft:addrider": mc.EntityAddRiderComponent;
    addrider: mc.EntityAddRiderComponent;
    "minecraft:ageable": mc.EntityAgeableComponent;
    ageable: mc.EntityAgeableComponent;
    "minecraft:can_climb": mc.EntityCanClimbComponent;
    can_climb: mc.EntityCanClimbComponent;
    "minecraft:can_fly": mc.EntityCanFlyComponent;
    can_fly: mc.EntityCanFlyComponent;
    "minecraft:can_power_jump": mc.EntityCanPowerJumpComponent;
    can_power_jump: mc.EntityCanPowerJumpComponent;
    "minecraft:color": mc.EntityColorComponent;
    color: mc.EntityColorComponent;
    "minecraft:equippable": mc.EntityEquippableComponent;
    equippable: mc.EntityEquippableComponent;
    "minecraft:fire_immune": mc.EntityFireImmuneComponent;
    fire_immune: mc.EntityFireImmuneComponent;
    "minecraft:floats_in_liquid": mc.EntityFloatsInLiquidComponent;
    floats_in_liquid: mc.EntityFloatsInLiquidComponent;
    "minecraft:flying_speed": mc.EntityFlyingSpeedComponent;
    flying_speed: mc.EntityFlyingSpeedComponent;
    "minecraft:friction_modifier": mc.EntityFrictionModifierComponent;
    friction_modifier: mc.EntityFrictionModifierComponent;
    "minecraft:ground_offset": mc.EntityGroundOffsetComponent;
    ground_offset: mc.EntityGroundOffsetComponent;
    "minecraft:healable": mc.EntityHealableComponent;
    healable: mc.EntityHealableComponent;
    "minecraft:inventory": mc.EntityInventoryComponent;
    inventory: mc.EntityInventoryComponent;
    "minecraft:is_baby": mc.EntityIsBabyComponent;
    is_baby: mc.EntityIsBabyComponent;
    "minecraft:is_charged": mc.EntityIsChargedComponent;
    is_charged: mc.EntityIsChargedComponent;
    "minecraft:is_chested": mc.EntityIsChestedComponent;
    is_chested: mc.EntityIsChestedComponent;
    "minecraft:is_dyeable": mc.EntityIsDyeableComponent;
    is_dyeable: mc.EntityIsDyeableComponent;
    "minecraft:is_hidden_when_invisible": mc.EntityIsHiddenWhenInvisibleComponent;
    is_hidden_when_invisible: mc.EntityIsHiddenWhenInvisibleComponent;
    "minecraft:is_ignited": mc.EntityIsIgnitedComponent;
    is_ignited: mc.EntityIsIgnitedComponent;
    "minecraft:is_illager_captain": mc.EntityIsIllagerCaptainComponent;
    is_illager_captain: mc.EntityIsIllagerCaptainComponent;
    "minecraft:is_saddled": mc.EntityIsSaddledComponent;
    is_saddled: mc.EntityIsSaddledComponent;
    "minecraft:is_shaking": mc.EntityIsShakingComponent;
    is_shaking: mc.EntityIsShakingComponent;
    "minecraft:is_sheared": mc.EntityIsShearedComponent;
    is_sheared: mc.EntityIsShearedComponent;
    "minecraft:is_stackable": mc.EntityIsStackableComponent;
    is_stackable: mc.EntityIsStackableComponent;
    "minecraft:is_stunned": mc.EntityIsStunnedComponent;
    is_stunned: mc.EntityIsStunnedComponent;
    "minecraft:is_tamed": mc.EntityIsTamedComponent;
    is_tamed: mc.EntityIsTamedComponent;
    "minecraft:item": mc.EntityItemComponent;
    item: mc.EntityItemComponent;
    "minecraft:leashable": mc.EntityLeashableComponent;
    leashable: mc.EntityLeashableComponent;
    "minecraft:mark_variant": mc.EntityMarkVariantComponent;
    mark_variant: mc.EntityMarkVariantComponent;
    "minecraft:tamemount": mc.EntityMountTamingComponent;
    tamemount: mc.EntityMountTamingComponent;
    "minecraft:onfire": mc.EntityOnFireComponent;
    onfire: mc.EntityOnFireComponent;
    "minecraft:push_through": mc.EntityPushThroughComponent;
    push_through: mc.EntityPushThroughComponent;
    "minecraft:rideable": mc.EntityRideableComponent;
    rideable: mc.EntityRideableComponent;
    "minecraft:riding": mc.EntityRidingComponent;
    riding: mc.EntityRidingComponent;
    "minecraft:scale": mc.EntityScaleComponent;
    scale: mc.EntityScaleComponent;
    "minecraft:skin_id": mc.EntitySkinIdComponent;
    skin_id: mc.EntitySkinIdComponent;
    "minecraft:strength": mc.EntityStrengthComponent;
    strength: mc.EntityStrengthComponent;
    "minecraft:tameable": mc.EntityTameableComponent;
    tameable: mc.EntityTameableComponent;
    "minecraft:variant": mc.EntityVariantComponent;
    variant: mc.EntityVariantComponent;
    "minecraft:wants_jockey": mc.EntityWantsJockeyComponent;
    wants_jockey: mc.EntityWantsJockeyComponent;
    "minecraft:health": mc.EntityHealthComponent;
    health: mc.EntityHealthComponent;
    "minecraft:lava_movement": mc.EntityLavaMovementComponent;
    lava_movement: mc.EntityLavaMovementComponent;
    "minecraft:movement": mc.EntityMovementComponent;
    movement: mc.EntityMovementComponent;
    "minecraft:underwater_movement": mc.EntityUnderwaterMovementComponent;
    underwater_movement: mc.EntityUnderwaterMovementComponent;
    "minecraft:movement.amphibious": mc.EntityMovementAmphibiousComponent;
    "movement.amphibious": mc.EntityMovementAmphibiousComponent;
    "minecraft:movement.basic": mc.EntityMovementBasicComponent;
    "movement.basic": mc.EntityMovementBasicComponent;
    "minecraft:movement.fly": mc.EntityMovementFlyComponent;
    "movement.fly": mc.EntityMovementFlyComponent;
    "minecraft:movement.generic": mc.EntityMovementGenericComponent;
    "movement.generic": mc.EntityMovementGenericComponent;
    "minecraft:movement.glide": mc.EntityMovementGlideComponent;
    "movement.glide": mc.EntityMovementGlideComponent;
    "minecraft:movement.hover": mc.EntityMovementHoverComponent;
    "movement.hover": mc.EntityMovementHoverComponent;
    "minecraft:movement.jump": mc.EntityMovementJumpComponent;
    "movement.jump": mc.EntityMovementGlideComponent;
    "minecraft:movement.skip": mc.EntityMovementSkipComponent;
    "movement.skip": mc.EntityMovementSkipComponent;
    "minecraft:movement.sway": mc.EntityMovementSwayComponent;
    "movement.sway": mc.EntityMovementSwayComponent;
    "minecraft:navigation.climb": mc.EntityNavigationClimbComponent;
    "navigation.climb": mc.EntityNavigationClimbComponent;
    "minecraft:navigation.float": mc.EntityNavigationFloatComponent;
    "navigation.float": mc.EntityNavigationFloatComponent;
    "minecraft:navigation.fly": mc.EntityNavigationFlyComponent;
    "navigation.fly": mc.EntityNavigationFlyComponent;
    "minecraft:navigation.generic": mc.EntityNavigationGenericComponent;
    "navigation.generic": mc.EntityNavigationGenericComponent;
    "minecraft:navigation.hover": mc.EntityNavigationHoverComponent;
    "navigation.hover": mc.EntityNavigationHoverComponent;
    "minecraft:navigation.walk": mc.EntityNavigationWalkComponent;
    "navigation.walk": mc.EntityNavigationWalkComponent;
    [key: string]: any;
};
