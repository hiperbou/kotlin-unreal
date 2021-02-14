if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinUnreal'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinUnreal'.");
}var KotlinUnreal = function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('KotlinUnreal', _);
  return _;
}(typeof KotlinUnreal === 'undefined' ? {} : KotlinUnreal, kotlin);
